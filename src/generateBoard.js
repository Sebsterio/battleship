module.exports = boardSize => {
	const board = {};
	for (let y = 1; y <= boardSize; y++) {
		const ASCII_A = 65;
		for (let x = ASCII_A; x < ASCII_A + boardSize; x++) {
			const xChar = String.fromCharCode(x);
			const coord = xChar + y;
			board[coord] = null;
		}
	}
	return board;
};
