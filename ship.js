module.exports = length => ({
	length: length || 0,
	hits: Array(length).fill(0),
	hit(i) {
		if (i < 0 || i >= this.length) return;
		this.hits[i] = 1;
	},
	isSunk() {
		return this.hits.find(el => el === 0) ? false : true;
	}
});
