declare type bns = [boolean, number, string][];

declare type parser = {
	toArray(_:string): [boolean, number, string][];
	toString(_: [boolean, number, string][]): string;
};
