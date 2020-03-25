const Player = require("../player");
const Gameboard = require("../gameboard");

describe("player", () => {
	//
	it("produces an object", () => {
		expect(typeof Player()).toEqual("object");
	});

	it("populates enemyView with props coord: null", () => {
		const enemyBoard = Gameboard(1);
		const player = Player(null, enemyBoard);
		player.populateEnemyView();
		expect(player.enemyView).toMatchObject({ A1: null });
	});

	it("makes and records an attack", () => {
		const enemyBoard = Gameboard(1);
		const player = Player(null, enemyBoard);
		player.attack("A1");
		expect(player.enemyView).toMatchObject({ A1: 0 });
	});

	it("makes and records a succesful attack", () => {
		const enemyBoard = Gameboard(1);
		enemyBoard.placeShip("a", 1, 1, "horizontal");
		const player = Player(null, enemyBoard);
		player.attack("A1");
		expect(player.enemyView).toMatchObject({ A1: 1 });
	});

	test("ai", () => {
		const playerBoard = Gameboard(2);
		const enemyAI = Player(null, playerBoard);
		enemyAI.populateEnemyView();
		enemyAI.AI();
		enemyAI.AI();
		enemyAI.AI();
		enemyAI.AI();
		expect(enemyAI.enemyView).toMatchObject({ A1: 0, A2: 0, B1: 0, B2: 0 });
	});
});
