const Gameboard = require("./gameboard");

it("adds a new ship - 1 segment", () => {
	const gameboard = Gameboard(1);
	gameboard.placeShip("a", 1, 1, "horizontal");
	expect(gameboard.ships.length).toBe(1);
	expect(gameboard.cells).toEqual({ A1: [0, 0] });
});

it("doesn't add a ship if it sticks out of the board", () => {
	const gameboard = Gameboard(1);
	expect(() => gameboard.placeShip("a", 2, 1, "horizontal")).toThrow();
	expect(() => gameboard.placeShip("b", 1, 1, "horizontal")).toThrow();
});

it("adds a new ship - multiple segments", () => {
	const gameboard = Gameboard(2);
	gameboard.placeShip("a", 1, 2, "horizontal");
	expect(gameboard.cells).toEqual({ A1: [0, 0], B1: [0, 1] });

	const gameboard1 = Gameboard(2);
	gameboard1.placeShip("a", 1, 2, "vertical");
	expect(gameboard1.cells).toEqual({ A1: [0, 0], A2: [0, 1] });
});

it("doesn't add a ship that starts on an existing field", () => {
	const gameboard = Gameboard(1);
	gameboard.placeShip("a", 1, 1, "horizontal");
	expect(() => gameboard.placeShip("a", 1, 1, "horizontal")).toThrow();
});

it("doesn't add a ship that passes through an existing field", () => {
	const gameboard = Gameboard(3);
	gameboard.placeShip("b", 2, 1, "horizontal");
	expect(() => gameboard.placeShip("b", 1, 3, "horizontal")).toThrow();
});

it("rejects an illegally placed ship before saving any cells", () => {
	const gameboard = Gameboard(2);
	gameboard.placeShip("b", 1, 1, "horizontal");
	gameboard.placeShip("a", 1, 2, "horizontal");
	expect(gameboard.cells).toEqual({ B1: [0, 0] });
});
