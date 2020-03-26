const Gameboard = require("./gameboard");
const Player = require("./player");

module.exports = ({ boardSize, p1, p2 }) => {
	const playerBoard = Gameboard(boardSize);
	const enemyBoard = Gameboard(boardSize);
	const player = Player(enemyBoard, p1);
	const enemy = Player(playerBoard, p2);

	// temp
	playerBoard.placeShip("A", 1, 5, "horizontal");
	playerBoard.placeShip("D", 3, 4, "horizontal");
	playerBoard.placeShip("B", 3, 3, "vertical");
	playerBoard.placeShip("E", 6, 2, "vertical");
	playerBoard.placeShip("G", 6, 2, "vertical");
	enemyBoard.placeShip("A", 1, 5, "horizontal");
	enemyBoard.placeShip("D", 3, 4, "horizontal");
	enemyBoard.placeShip("B", 3, 3, "vertical");
	enemyBoard.placeShip("E", 6, 2, "vertical");
	enemyBoard.placeShip("G", 6, 2, "vertical");
	// ---

	let turn = 0;
	const maxTurns = boardSize * boardSize;

	const takeTurn = (attackCell, handleWin) => {
		if (player.attack(attackCell)) handleWin("Player");
		if (enemy.AI()) handleWin("Enemy");
		turn++;
		if (turn > maxTurns) throw new Error("Turn limit exceeded");
	};

	return {
		takeTurn,
		playerBoard,
		player
	};
};
