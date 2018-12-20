import React from 'react';
import { useStore } from '../hooks/useStore.js';
import { storyStore } from '../stores/storyStore.js';
import { CoverImage } from './CoverImage.js';
import { useRoute } from '../hooks/useRoute.js';
import { storyRoute } from '../routes/story/storyRoute.js';

export function StoryItem({ story }) {
	const { Link } = useRoute(storyRoute);

	const { state } = useStore(storyStore);

	const [w, h] = state.view === 'grid' ? [200, 180] : [110, 110];

	return (
		<div className={`StoryItem Component view-${state.view}`}>
			<Link to={story.id}>
				<CoverImage url={story.image} width={w} height={h} />
				<h2 className="title">{story.title}</h2>
				<div className="descr">{story.descr}</div>
			</Link>
		</div>
	);
}
