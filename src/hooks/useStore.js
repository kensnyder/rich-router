// inspired by https://github.com/jhonnymichel/react-hookstore/blob/6d23d2fcb0e7cf8a3929a01e0c543fe5e05ecf05/src/index.js
import { useState, useEffect } from 'react';

/**
 * Creates a new store
 * @param {Object} [config] - An object containing the store setup
 * @property {Object} [config.state] - The store initial state. It can be of any type.
 * @property {Object} [config.actions] - Named functions that can be dispatched by name and payload.
 * @property {Function|String|Boolean} [config.debug] - True or string to console.log state each time it is set; If function, call with state each time it is set
 * @return {Object} - Info and methods for working with the store
 * @property {Object} state - The current value of the state
 * @property {Object} actions - The named functions that were passed in to begin with
 * @property {Function<String,*>} dispatch - A function that takes an action name and a payload
 * @property {Function<Function|*>} setState - A function that will set state directly across all components that useStore()
 * @property {Function<*,String,*>} _reducer - A function that calls the given action and payload on the given state
 * @property {Function[]} _setters - A list of setters that were added using useStore()
 */
export function createStore({ state = {}, actions = {}, debug = false }) {
	const store = {
		state,
		actions,
		dispatch(action, payload) {
			store.setState(state => {
				return store._reducer(state, action, payload);
			});
		},
		setState(newState) {
			if (typeof newState === 'function') {
				store.state = newState(store.state);
			} else {
				store.state = newState;
			}
			debug && doDebug(store.state);
			store._setters.forEach(setter => setter(() => store.state));
		},
		_reducer(state, action, payload) {
			if (typeof actions[action] !== 'function') {
				throw new Error(
					`Unable to dispatch unknown action "${action}".`,
				);
			}
			return actions[action](state, payload);
		},
		_setters: [],
	};

	debug && doDebug(store.state);

	return store;

	function doDebug() {
		if (typeof debug === 'function') {
			debug(store.state);
		} else if (typeof debug === 'string') {
			console.log(`Debug store "${debug}"`, store.state);
		} else if (debug === true) {
			console.log('Debug store', store.state);
		}
	}
}

/**
 * @param {Object} store - A store created with createStore()
 * @return {Object} - tools for working with the store
 * @property {*} state - The values in the store
 * @property {Function<String,*>} dispatch - Method to dispatch a named function with the given payload
 * @property {Function<Function|*>} setState - Method to update state directly
 */
export function useStore(store) {
	const [state, setState] = useState(store.state);

	useEffect(
		() => () => {
			store._setters = store._setters.filter(
				setter => setter !== setState,
			);
		},
		[],
	);

	if (!store._setters.includes(setState)) {
		store._setters.push(setState);
	}

	return { state, dispatch: store.dispatch, setState: store.setState };
}
