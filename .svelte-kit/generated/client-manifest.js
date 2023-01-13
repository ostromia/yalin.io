export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')];

export const server_loads = [];

export const dictionary = {
	"/(index)": [5,[2]],
	"/(index)/articles": [6,[2]],
	"/(index)/projects": [7,[2,3]],
	"/pseudocode2python": [8,[4]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};