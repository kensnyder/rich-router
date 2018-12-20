import React from 'react';
import { Router } from './functional-hooks-router/index.js';
import { HomeCtrl } from './controllers/Home/HomeCtrl.js';
import { StoryListCtrl } from './controllers/Story/List/StoryListCtrl.js';
import { StoryDetailCtrl } from './controllers/Story/Detail/StoryDetailCtrl.js';

const routes = [
	{ path: '/stories', ctrl: StoryListCtrl },
	{ path: /^\/stories\/(\d+)$/, map: [null, 'id'], ctrl: StoryDetailCtrl },
	{ path: '/stories/3', map: [null, 'id'], ctrl: StoryDetailCtrl },
	{ path: '/curate', lazy: '/bundles/curateRoutes.js' },
	{ path: '/', ctrl: HomeCtrl },
	{ path: '', ctrl: HomeCtrl },
	// { path: /.*/, ctrl: NotFoundCtrl },
];

export function App() {
	return (
		<section className="App Component">
			<Router routes={routes} />
		</section>
	);
}
