import React, { useState, useEffect, createContext } from 'react';
// import { createStore, useStore } from './useStore.js';
import { strategies } from './strategies.js';

// const routeStore = createStore({
// 	routes: [],
// }, {
// 	go: function() { console.log('CreateStore go') }
// });

export function Router({ routes, strategy = 'hash' }) {
	let [engine, setEngine] = useState(null);
	let [location, setLocation] = useState(null);
	useEffect(
		() => {
			console.log(`used strategy "${strategy}" with routes=`, routes);
			const StrategyHandler =
				typeof strategy === 'function'
					? strategy
					: strategies[strategy];
			if (!StrategyHandler) {
				throw new Error(`Unknown Router strategy "${strategy}".`);
			}
			setEngine(() => {
				const newEngine = new StrategyHandler(routes);
				newEngine.setLocation = setLocation;
				newEngine.handleUrlChange();
				newEngine.setup();
				return newEngine;
			});
			return () => engine.teardown();
		},
		[strategy, routes],
	);
	// useEffect(
	// 	() => {
	// 		console.log('used routes', routes);
	// 		if (engine) {
	// 			engine.setRoutes(routes);
	// 			engine.setup();
	// 		}
	// 	},
	// 	[routes],
	// );
	if (!engine || !location || !location.route) {
		return <div>Loading...</div>;
	}
	const Ctrl = location.route.ctrl;
	// TODO: handle lazy loading, route guards, and ??
	return <Ctrl location={location} />;
}
