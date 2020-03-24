const Ship = require("./ship");

module.exports = size => ({
	cells: {}, // e.g. {A1: {ship: _ref_, segment: 0}}

	placeShip(x, y, length, orientation) {
		x = x.toUpperCase();

		// validate coords of ship extremities
		if (y < 1 || y > size || y + length - 1 < 1 || y + length - 1 > size)
			throw new Error("Incorrect y coordinate: " + y);
		const xCharCode = x.charCodeAt(0);
		const ASCII_A = 65;
		const maxCharCode = ASCII_A - 1 + size;
		if (
			xCharCode < ASCII_A ||
			xCharCode > maxCharCode ||
			xCharCode + length - 1 < ASCII_A ||
			xCharCode + length - 1 > maxCharCode
		)
			throw new Error("Incorrect x coordinate: " + x);

		// instantiate new ship and save reference
		const newShip = Ship(length);

		// for each ship segment create a grid cell with ship reference
		const shipCoordsTemp = {};
		for (let segment = 0; segment < length; segment++) {
			// increment a coordinate
			switch (orientation) {
				case "horizontal":
					x = String.fromCharCode(x.charCodeAt(0) + segment);
					break;
				case "vertical":
					y += segment;
					break;
				default:
					throw new Error("Uknown ship orientation");
			}
			// validate coords and save in shipCoordsTemp
			const coord = x + y; // concat
			if (coord in this.cells) throw new Error("Cell occupied: " + coord);
			shipCoordsTemp[coord] = { ship: newShip, segment };
		}

		// save coords of ship segments
		this.cells = { ...this.cells, ...shipCoordsTemp };
	},

	receiveAttack(x, y) {
		x = x.toUpperCase();
		const coord = x + y; // concat
		const cell = this.cells[coord];
		if (cell == undefined) {
			this.cells[coord] = "miss";
			return;
		}
		cell.ship.hit(cell.segment);
		cell.hit = true;

		// if (cell.ship.isSunk())
	},

	areAllShipsSunk() {
		return Object.keys(this.cells).every(cell => cell.hit === true);
	}
});
