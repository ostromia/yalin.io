const parser: parser = {
	toArray(pseudocode) {
		return pseudocode
			.split(/\n/)
			.map((i) => [false, i.search(/\S|$/), i.trim()]);
	},

	toString(pythonarray) {
		return pythonarray
			.filter((i) => i[2] != 'REMOVED')
			.map((i) => ' '.repeat(i[1]) + i[2])
			.join('\n');
	}
}

export default parser;
