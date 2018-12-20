import { createRoutes } from '../../hooks/useRotues.js';
import { storyViewRoute } from './view/storyViewRoute.js';

export const appRoutes = createRoutes({
	prefix: '',
	url: '',
	ctrl: AppCtrl,
	children: [
		{ prefix: '/stories', load: '/react/bundles/storyRoutes.js' },
		// storyAddRoute,
		// storyDeleteRoute,
	],
});
