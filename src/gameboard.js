const Ship = require("./ship");
const generateBoard = require("./generateBoard");

module.exports = size => ({
	size,

	// list of coords; type: object
	// props: coords (e.g. A1)
	// values: null (initial) | 'miss' | {ship: _ref_, segment: _N_}}
	cells: generateBoard(size),
	ships: [],

	placeShip(x, y, length, orientation) {
		x = x.toUpperCase();

		// Validate coords of ship extremities
		if (
			y < 1 ||
			y > size ||
			(orientation === "vertical" &&
				(y + length - 1 < 1 || y + length - 1 > size))
		)
			throw new Error("Incorrect y coordinate: " + y);
		const xCharCode = x.charCodeAt(0);
		const ASCII_A = 65;
		const maxCharCode = ASCII_A - 1 + size;
		if (
			xCharCode < ASCII_A ||
			xCharCode > maxCharCode ||
			(orientation == "horizontal" &&
				(xCharCode + length - 1 < ASCII_A ||
					xCharCode + length - 1 > maxCharCode))
		)
			throw new Error("Incorrect x coordinate: " + x);

		// Instantiate new ship and save reference
		const newShip = Ship(length);
		this.ships.push(newShip);

		// For each ship segment create a grid cell with ship reference
		const shipCoordsTemp = {};
		for (let segment = 0; segment < length; segment++) {
			// Validate coords and save in shipCoordsTemp
			const coord = x + y; // concat
			if (this.cells[coord] !== null)
				throw new Error("Cell occupied: " + coord);
			shipCoordsTemp[coord] = { ship: newShip, segment };

			// Increment a coordinate
			switch (orientation) {
				case "horizontal":
					x = String.fromCharCode(x.charCodeAt(0) + 1);
					break;
				case "vertical":
					y++;
					break;
				default:
					throw new Error("Uknown ship orientation");
			}
		}

		// Save coords of ship segments
		this.cells = { ...this.cells, ...shipCoordsTemp };
	},

	receiveAttack(coord) {
		const cell = this.cells[coord];
		if (cell === null) {
			this.cells[coord] = "miss";
			return 0;
		}
		if (cell === "miss") return null;
		cell.ship.hit(cell.segment);
		cell.hit = true;
		return 1;
		// if (cell.ship.isSunk())
	},

	areAllShipsSunk() {
		return this.ships.every(ship => ship.isSunk());
	}
});
