// 04_rpn_calculator

// Constructor function that can add and subtract values.
function Calculator() {
	this.stack = []; // The stack that numbers get pushed to
	this.cache = []; // Temporary cache for each operation
}

// Prototype of Calculator function for all static code
Calculator.prototype = {
	error: "calculator is empty",
	push: function(num) {
		this.stack.push(num); // Pushes (num) to the stack.
	},
	value: function() {
		return this.stack[this.stack.length - 1]; // Gives the last value of the stack
	},
	template: function() {
		this.cache = []; // Resets the cache
		if (this.stack.length >= 2) { // If stack is long enough to do operation
			this.cache.push(this.stack.pop());
			this.cache.push(this.stack.pop()); // Send variables to cache
		} else {
			throw this.error; // Error message
		}
	},
	plus: function() {
		this.template(); // Template function called
		this.stack.push(this.cache[1] + this.cache[0]); // Addition
	},
	minus: function() {
		this.template();
		this.stack.push(this.cache[1] - this.cache[0]); // Subtraction
	},
	times: function() {
		this.template();
		this.stack.push(this.cache[1] * this.cache[0]); // Multiplication
	},
	divide: function() {
		this.template();
		this.stack.push(this.cache[1] / this.cache[0]); // Division
	},
};