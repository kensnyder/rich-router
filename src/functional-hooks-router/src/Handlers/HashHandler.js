export class HashHandler {
	setup() {
		window.addEventListener('hashchange', this.handleUrlChange);
	}
	teardown() {
		window.removeEventListener('hashchange', this.handleUrlChange);
	}
	getUrl() {
		return window.location.hash.slice(1);
	}
	setUrl(url) {
		window.location.hash = '#' + url;
	}
}
