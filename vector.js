// A vector class that takes two parameters and has methods to create other vectors and the vector's length

class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	plus(a, b) {
		return `(${this.x + a}, ${this.y + b})`;
	}
	minus(a, b) {
		return `(${this.x - a}, ${this.y - b})`;
	}
	get length() {
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	}
}
