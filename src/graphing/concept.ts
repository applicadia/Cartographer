export default class Concept {
	Name: string;
	Tracer: symbol;
	Data: any;

	constructor(name: string, data: any) {
		this.Name = name;
		this.Data = data;
		this.Tracer = Symbol(name);
	}
}
