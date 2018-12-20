import { createRoute } from '../../hooks/useRoute.js';
import { storyViewRoute } from './view/storyViewRoute.js';
import { StoryCtrl } from '../../components/StoryCtrl.js';

export const storyViewRoute = createRoute({
	url: ':id',
	ctrl: StoryCtrl,
});
