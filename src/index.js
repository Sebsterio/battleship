const Game = require("./game");

const populateBoardWithCells = (board, boardSize) => {
	const ASCII_A = 65;
	const cells = [];
	for (let y = 1; y <= boardSize; y++) {
		for (let x = 0; x < boardSize; x++) {
			const xChar = String.fromCharCode(ASCII_A + x);
			cells.push(`<div class="cell" data-cell=${xChar + y}>${xChar + y}</div>`);
		}
	}
	board.innerHTML = cells.join("");
};

const renderBoardContent = (board, cells) => {
	for (let cell in cells) {
		const cellElement = board.querySelector(`[data-cell="${cell}"]`);
		if (cells[cell] !== null) {
			if (cells[cell].ship) {
				cellElement.classList.add("own-ship");
				if (cells[cell].ship.isSunk())
					cellElement.classList.add("own-ship-sunk");
				else if (cells[cell].hit) cellElement.classList.add("own-ship-hit");
			} else if (cells[cell] === "miss")
				cellElement.classList.add("own-board-miss");
			else if (cells[cell] === 1) cellElement.classList.add("hit");
			else if (cells[cell] === 0) cellElement.classList.add("miss");
		}
	}
};

const initApp = () => {
	// const app = document.querySelector(".app");
	const p1board = document.querySelector(".p1-board");
	const p2board = document.querySelector(".p2-board");

	let game;
	let gameOver = false;

	const updateBoards = () => {
		renderBoardContent(p1board, game.playerBoard.cells);
		renderBoardContent(p2board, game.player.enemyView);
	};

	const startGame = ({ boardSize }) => {
		document.documentElement.style.setProperty("--board-size", boardSize);
		populateBoardWithCells(p1board, boardSize);
		populateBoardWithCells(p2board, boardSize);
		game = Game({ boardSize, p1: "P", p2: "AI" });
		updateBoards();
	};

	const declareWinner = winner => {
		console.log(winner + " won!");
		alert(winner + " won!");
		gameOver = true;
	};

	p2board.addEventListener("click", e => {
		if (!gameOver) {
			game.takeTurn(e.target.dataset.cell, declareWinner);
			updateBoards();
		}
	});

	startGame({ boardSize: 8 });
};

initApp();
