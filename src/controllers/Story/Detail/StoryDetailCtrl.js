import React from 'react';

export function StoryDetailCtrl(props, state) {
	console.log('StoryDetailCtrl', { props, state });

	return (
		<div className="StoryDetailCtrl Component">
			<p>
				<a href="#/stories">&lsaquo; Back to stories</a>
			</p>
			<h3>Story Info!</h3>
			<p>id = {props.location.match[1]}</p>
			<pre>
				props:
				<br />
				{JSON.stringify(props, null, 4)}
			</pre>
		</div>
	);
}
