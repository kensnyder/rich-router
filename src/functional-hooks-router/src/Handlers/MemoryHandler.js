export class MemoryHandler {
	setup() {
		this.url = '';
	}
	teardown() {
		this.url = undefined;
	}
	getUrl() {
		return this.url;
	}
	setUrl(url) {
		this.url = url;
	}
}
