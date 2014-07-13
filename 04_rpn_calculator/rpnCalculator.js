// 04_rpn_calculator

// Constructor function that can add and subtract values.
function Calculator() {
	this.stack = [];
	this.value = function () {
		if (this.stack == []) {
			return "calculator is empty";
		} else {
			return this.stack[this.stack.length - 1];
		}
	};
	this.push = function (num) {
		this.stack.push(num);
	};
	this.plus = function () {
		if (this.stack.length > 0) {
			// var opOne = this.stack.pop();
			// var opTwo = this.stack.pop();
			this.stack.push(this.stack.pop() + this.stack.pop());
		} else {
			throw "calculator is empty";
		}
	};
	this.minus = function () {
		if (this.stack.length > 0) {
			var opOne = this.stack.pop();
			var opTwo = this.stack.pop();
			this.stack.push(opTwo - opOne);
		} else {
			throw "calculator is empty";
		}
	};
	this.times = function () {
		if (this.stack.length > 0) {
			var opOne = this.stack.pop();
			var opTwo = this.stack.pop();
			this.stack.push(opTwo * opOne);
		} else {
			throw "calculator is empty";
		}
	};
	this.divide = function () {
		if (this.stack.length > 0) {
			var opOne = this.stack.pop();
			var opTwo = this.stack.pop();
			this.stack.push(opTwo / opOne);
		} else {
			throw "calculator is empty";
		}
	};
}

// Notes: Could be refactored to be more DRY. But it works.