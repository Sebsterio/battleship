module.exports = (ownBoard, enemyBoard) => ({
	// record of own attacks
	enemyView: {},

	// fill up enemyView with props equal enemyBoard coords and value null
	populateEnemyView() {
		const boardSize = enemyBoard.size;
		for (let y = 1; y <= boardSize; y++) {
			const ASCII_A = 65;
			for (let x = ASCII_A; x < ASCII_A + boardSize; x++) {
				const xChar = String.fromCharCode(x);
				const coord = xChar + y;
				this.enemyView[coord] = null;
			}
		}
	},

	// record attack result
	attack(coord) {
		const isEnemyHit = enemyBoard.receiveAttack(coord);
		this.enemyView[coord] = isEnemyHit;
		return isEnemyHit;
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
