import {transpiler} from './p2p_transpiler';
import {validator} from './p2p_validator';

export class p2p {
	#parse(input) {
		this.source = input
			.split('\n')
			.map( i => [false, i.search(/\S|$/), i.trim()] );
	}

	#validate() {
		this.error = validator(this.source)
	}

	transpile() {
		return transpiler(this.source)
			.filter(i => i[2] != 'REMOVED')
			.map(i => ' '.repeat(i[1]) + i[2] )
			.join('\n');
	}

	constructor(input) {
		this.source;
		this.error = '';
		this.#parse(input);
		this.#validate();
	}
}
