import React from 'react';
import { useRouter } from '../../functional-hooks-router/index.js';

export function HomeCtrl() {
	const { Link } = useRouter();
	return (
		<div className="HomeCtrl Component">
			<h1>Where to?</h1>
			<nav>
				<ul>
					<li>
						<Link to={'/stories'} className="foobar">
							View Stories
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
