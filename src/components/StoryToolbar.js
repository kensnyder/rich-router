import React from 'react';
import { useStore } from '../hooks/useStore.js';
import { storyStore } from '../stores/storyStore.js';

export function StoryToolbar() {
	const { state, dispatch } = useStore(storyStore);

	return (
		<div className="StoryToolbar Component">
			<button
				className={state.view === 'list' ? 'selected' : ''}
				onClick={showList}
			>
				List
			</button>
			<button
				className={state.view === 'grid' ? 'selected' : ''}
				onClick={showGrid}
			>
				Grid
			</button>
			<input
				value={state.search}
				onChange={doSearch}
				size="40"
				placeholder="Filter..."
			/>
		</div>
	);

	function showList() {
		dispatch('updateView', 'list');
	}

	function showGrid() {
		dispatch('updateView', 'grid');
	}

	function doSearch(evt) {
		dispatch('searchStories', evt.target.value);
	}
}
