const Ship = require("./ship");

module.exports = size => ({
	cells: {}, // {a1: [0,1]}

	// References to ship objects
	ships: [],

	placeShip(x, y, length, orientation) {
		x = x.toUpperCase();

		// validate coords of ship extremities
		if (y < 1 || y > size || y + length - 1 < 1 || y + length - 1 > size)
			throw new Error("incorrect y coordinate: " + y);
		const xCharCode = x.charCodeAt(0);
		const ASCII_A = 65;
		const maxCharCode = ASCII_A - 1 + size;
		if (
			xCharCode < ASCII_A ||
			xCharCode > maxCharCode ||
			xCharCode + length - 1 < ASCII_A ||
			xCharCode + length - 1 > maxCharCode
		)
			throw new Error("incorrect x coordinate: " + x);

		// instantiate new ship and save reference
		this.ships.push(Ship(length));

		// for each ship segment create a grid cell with ship info
		const shipIndex = this.ships.length - 1;
		for (let segment = 0; segment < length; segment++) {
			// increment relevant coordinate
			if (orientation === "horizontal") {
				x = String.fromCharCode(x.charCodeAt(0) + segment);
			} else if (orientation === "vertical") {
				y += segment;
			}

			const coord = x + y.toString();
			if (coord in this.cells) throw new Error("duplicate: " + coord);
			this.cells[coord] = [shipIndex, segment];
		}
	}
});
