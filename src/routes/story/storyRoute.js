import { createRoute } from '../../hooks/useRoute.js';
import { storyViewRoute } from './view/storyViewRoute.js';

export const storyRoute = createRoute({
	prefix: '/stories',
	url: '',
	children: [
		storyViewRoute,
		// storyAddRoute,
		// storyDeleteRoute,
	],
});
