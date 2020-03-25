const Gameboard = require("./gameboard");
const Player = require("./player");

// @gameMode: pvp | pvai
module.exports = (boardSize, gameMode) => {
	const playerBoard = Gameboard(boardSize);
	const enemyBoard = Gameboard(boardSize);
	const player = Player(null, enemyBoard);
	const enemy = Player(null, playerBoard);

	let winner = null;
	const player1starts = Math.random() < 0.5;
	const maxTurns = boardSize * boardSize;
	let turn = 1;

	let player1ready = false;
	let player2ready = false;

	const playerTurn = () => {
		if (gameMode === "AIvAI") player.AI();
		else player.AI(); // P1 input

		if (enemyBoard.areAllShipsSunk) winner = "Player 1";
	};
	const enemyTurn = () => {
		if (gameMode === "PvAI" || gameMode === "AIvAI") enemy.AI();
		else enemy.AI(); // P2 input

		if (playerBoard.areAllShipsSunk) winner = "Player 2";
	};

	while (!winner) {
		if (player1starts) {
			playerTurn();
			enemyTurn();
		} else {
			enemyTurn();
			playerTurn();
		}
		turn++;
		if (turn >= maxTurns && !winner)
			throw new Error("Turn limit reached without a winner");
	}
	console.log(winner);
	return winner;
};
