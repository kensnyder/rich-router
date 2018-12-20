export class BasicMatcher {
	match(location, routes) {
		for (const route of routes) {
			if (typeof route.path === 'string') {
				if (location.path === route.path) {
					return { route, match: [] };
				}
			} else if (
				typeof route.path === 'object' &&
				typeof route.path.test === 'function'
			) {
				const match = location.path.match(route.path);
				return { route, match };
			}
		}
		return {
			route: {
				path: null,
				ctrl: () => (
					<div className="NotFound Component">
						<h1>404 Not Found</h1>
						<p>
							<a href="#/">Home</a>
						</p>
					</div>
				),
			},
			match: [],
		};
	}
}
