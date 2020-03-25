const game = require("../game");

it("works in AIvAI", () => {
	Array(5)
		.fill(null)
		.forEach(_ => {
			expect(["Player 1", "Player 2"]).toContain(game(1, "AIvAI"));
		});
});
