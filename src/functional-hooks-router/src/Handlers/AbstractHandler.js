export class AbstractHandler {
	constructor(routes) {
		this.routes = routes;
	}
	handleUrlChange = () => {};
	setRoutes(routes) {
		this.routes = routes;
	}
	handleUrlChange = () => {
		const location = this.parse();
		const { route, match } = this.match(location, this.routes);
		console.log('handleUrlChange', { location, route, match });
		this.setLocation({ ...location, route, match });
	};
}
