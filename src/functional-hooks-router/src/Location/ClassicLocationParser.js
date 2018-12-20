class ClassicLocationParser {
	parse(url) {
		const [pathname, search, hash] = url.split(/[?#]/);
		const searchData = {};
		search &&
			search.split('&').forEach(pair => {
				const [key, val] = pair.split('=');
				const keyString = decodeURIComponent(key);
				const value =
					typeof val === 'string'
						? decodeURIComponent(val)
						: undefined;
				searchData[keyString] = value;
			});
		return {
			url,
			pathname,
			search: search || '',
			searchData,
			hash: hash === undefined ? '' : '#' + hash,
		};
	}
	stringify(pathname = '', searchData = {}, hash = '') {
		const searchDataItems = [];
		for (const prop in searchData) {
			if (!searchData.hasOwnProperty(prop)) {
				continue;
			}
			const type = typeof searchData[prop];
			if (type === 'boolean' || type === 'string' || type === 'number') {
				const key = encodeURIComponent(prop);
				const val = encodeURIComponent(searchData[prop]);
				searchDataItems.push(`${key}=${val}`);
			}
		}
		const search = searchDataItems.join('&');
		const url =
			pathname + (search ? '?' + search : '') + (hash ? '#' + hash : '');
		return url;
	}
}
