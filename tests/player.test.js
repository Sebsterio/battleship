const Player = require("../src/player");
const Gameboard = require("../src/gameboard");

describe("player", () => {
	//
	it("produces an object", () => {
		const player = Player({ size: 1 }, null);
		expect(typeof player).toEqual("object");
	});

	it("populates enemyView with props coord: null", () => {
		const player = Player({ size: 1 }, null);
		expect(player.enemyView).toMatchObject({ A1: null });
	});

	it("makes and records an attack", () => {
		const enemyBoard = Gameboard(1);
		const player = Player(enemyBoard, "AI");
		player.attack("A1");
		expect(player.enemyView).toMatchObject({ A1: 0 });
	});

	it("makes and records a succesful attack", () => {
		const enemyBoard = Gameboard(1);
		enemyBoard.placeShip("a", 1, 1, "horizontal");
		const player = Player(enemyBoard, "AI");
		player.attack("A1");
		expect(player.enemyView).toMatchObject({ A1: 1 });
	});

	test("ai", () => {
		const playerBoard = Gameboard(2);
		const enemyAI = Player(playerBoard, "AI");
		const callback = () => {};
		enemyAI.AI(callback);
		enemyAI.AI(callback);
		enemyAI.AI(callback);
		enemyAI.AI(callback);
		expect(enemyAI.enemyView).toMatchObject({ A1: 0, A2: 0, B1: 0, B2: 0 });
	});
});
