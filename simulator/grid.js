'use strict';

import State from './state.js';

export default class Grid {

	constructor (width, height) {
		this.width = width;
		this.height = height;
		this.cells = Array(width * height)
			.fill(new State());
		Object.freeze(this);
	}

	get (x, y) {
		return this.cells[(y * this.width) + x];
	}

	set (x, y, state) {
		this.cells[(y * this.width) + x] = state;
	}

	/**
	 * Generator function for viewing a specific subset of the Grid
	 */
	*view (x, y, width, height) {
		let offset_x = this.x + this.width;
		let offset_y = this.y + this.height;
		for (let y = this.y; y < offset_y; y++) {
			for (let x = this.x; x < offset_x; x++) {
				yield this.grid.get(x, y);
			}
		}
	}

}
