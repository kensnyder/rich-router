import React from 'react';

export function StoryListCtrl(a, b) {
	console.log('StoryListCtrl', a, b);

	const ids = [123, 42, 3, 17];

	return (
		<div className="StoryListCtrl Component">
			<p>
				<a href="#/">&lsaquo; Back home</a>
			</p>
			<h3>Story List!</h3>
			{ids.map(id => (
				<p key={id}>
					<a href={`#/stories/${id}`}>View Story {id} &rsaquo;</a>
				</p>
			))}
		</div>
	);
}
