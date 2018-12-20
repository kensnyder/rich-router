export class BrowserHandler {
	setup() {
		window.addEventListener('popstate', this.handleUrlChange);
	}
	teardown() {
		window.removeEventListener('popstate', this.handleUrlChange);
	}
	getUrl() {
		const { pathname, search, hash } = window.location;
		const url =
			pathname + (search ? '?' + search : '') + (hash ? '#' + hash : '');
		return url;
	}
	setUrl(url) {
		const domain = window.location.href.replace(
			/^https?:\/\/.+?(\/|$)/,
			'',
		);
		window.location.href = domain + '/' + url;
	}
}
