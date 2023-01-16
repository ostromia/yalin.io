import {transpiler} from './p2p_transpiler';
import {validator} from './p2p_validator';

export class p2p {
	validate() {
		let error = validator(this.pseudocode);
		return (error === true) ? '' : error;
	}

	transpile() {
		let source = transpiler(this.pseudocode);
		return source.map(
			(i) => `${' '.repeat(i[1])}${i[2]}`
		);
	}

	constructor(input) {
		this.pseudocode = input.split('\n').map(
			i => [false, i.search(/\S|$/), i.trim()]
		);
	}
}
