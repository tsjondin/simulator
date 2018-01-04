'use strict';

export default class State {

	constructor (data = {}) {
		this.data = data;
		Object.freeze(this.data);
		Object.freeze(this);
	}

	update (data) {
		return new State(
			Object.assign(this.data, data));
	}

}
