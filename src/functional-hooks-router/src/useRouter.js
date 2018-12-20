import React, { useState, useEffect } from 'react';

const routers = {};

export function useRouter(name = 'global') {
	return {
		path,
		setPath,
		params,
		setParams,
		queryString,
		setQueryString,
		query,
		setQuery,
		hash,
		setHash,
		url,
		setUrl,

		Link,
		go,
		isActive,
		getUrl,
		matches,
		setParams,
	};

	function go(to = null) {}

	function isActive(to) {}

	function getUrl(to) {
		return '#' + to;
		// for (const child of route.children) {
		// 	if (matches(to, child)) {
		// 		return child.getUrl(to);
		// 	}
		// }
	}

	function setParams() {}

	function matches(to, route) {}

	function getActiveClass(to) {
		return 'baz';
		// return isActive(to) ? 'route-is-active' : '';
	}

	function Link({ to, children, ...attr }) {
		const classString = attr.className ? `${attr.className} ` : '';
		attr.className = classString + getActiveClass(to);
		attr.href = getUrl(to);
		attr.style = { ...(attr.style || {}), cursor: 'pointer' };
		if (attr.target === '_blank') {
			if (typeof attr.rel === 'string') {
				attr.rel += ' noopener noreferrer';
			} else {
				attr.rel = 'noopener noreferrer';
			}
		}
		return <a {...attr}>{children}</a>;
	}
}
