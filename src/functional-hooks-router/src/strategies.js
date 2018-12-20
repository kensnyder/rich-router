import { RouterStrategyBrowser } from './RouterStrategyBrowser.js';
import { RouterStrategyHash } from './RouterStrategyHash.js';

export const strategies = {
	hash: RouterStrategyHash,
	browser: RouterStrategyBrowser,
	// memory: RouterStrategyMemory,
};
