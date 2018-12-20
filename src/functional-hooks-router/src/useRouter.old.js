import { useState, useEffect } from 'react';

export function useRoute(
	route,
	{ strategy = 'hash', activeClass = 'route-active' },
) {
	return {
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
		for (const child of route.children) {
			if (matches(to, child)) {
				return child.getUrl(to);
			}
		}
	}

	function setParams() {}

	function matches(to, route) {}

	function getActiveClass(to) {
		return isActive(to) ? activeClass : null;
	}

	function Link({ to, children, ...attr }) {
		return (
			<a
				href
				onClick={go.bind(0, to)}
				className={getActiveClass(to)}
				{...attr}
			>
				{children}
			</a>
		);
	}
}
