const generateBoard = require("./generateBoard");

module.exports = (enemyBoard, playerControl) => ({
	// P | AI
	playerControl,

	// A record of own attacks
	// On init, keys = enemyBoardCoords, values = null
	enemyView: generateBoard(enemyBoard.size),

	// record attack result
	attack(coord) {
		const isEnemyHit = enemyBoard.receiveAttack(coord);
		this.enemyView[coord] = isEnemyHit; // 1|0

		// return whether won
		if (isEnemyHit && enemyBoard.areAllShipsSunk()) return true;
		return false;
	},

	// attack a random cell that hasn't been attacked yet
	AI() {
		const clearCells = [];
		for (let coord in this.enemyView) {
			if (this.enemyView[coord] === null) clearCells.push(coord);
		}
		randomClearCell = Math.floor(Math.random() * clearCells.length);
		const attackCoord = clearCells[randomClearCell];
		return this.attack(attackCoord);
	}
});
