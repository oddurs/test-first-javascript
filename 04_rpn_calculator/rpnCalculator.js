// 04_rpn_calculator

// Constructor function that can add and subtract values.

// var Calculator = function () {
// 	var stack = [];

// 	var popAndCompute = function (operation) {
// 		if (stack.length < 2) {
// 			throw "calculator is empty";
// 		}
// 		var operand1 = stack.pop();
// 		var operand2 = stack.pop();
// 		var result   = operation(operand1, operand2);
// 		return stack.push(result);
// 	};

// 	this.push = function (num) {
// 		stack.push(num);
// 	};

// 	this.value = function () {
// 		return stack[stack.length - 1];
// 	};

// 	this.plus = function () {
// 		popAndCompute(function (first, second) {
// 			return first + second;
// 		});
// 	};

// 	this.minus = function () {
// 		popAndCompute(function (first, second) {
// 			return second - first;
// 		});
// 	};

// 	this.divide = function () {
// 		popAndCompute(function (first, second) {
// 			return second / first;
// 		});
// 	};

// 	this.times = function () {
// 		popAndCompute(function (first, second) {
// 			return first * second;
// 		});
// 	};
// }

var Calculator = function () {
	var stack = [];

	var popAndCompute = function (operation) {
		if (stack.length < 2) { // if stack is < 2
			throw "calculator is empty"; // throw an error
		}

		var operand1 = stack.pop();
		var operand2 = stack.pop();

		var result   = operation(operand1, operand2);

		return stack.push(result); // push result to the stack
	};

	this.value = function () {
		return stack[stack.length - 1];
	};

	this.push = function (num) {
		stack.push(num);
	};

	this.plus = function () {
		popAndCompute(function(first, second) {
			return first + second;
		});
	};

	this.minus = function () {
		popAndCompute(function(first, second) {
			return second - first;
		});
	};

	this.divide = function () {
		popAndCompute(function(first, second) {
			return second / first;
		});
	};
	
	this.times = function () {
		popAndCompute(function(first, second) {
			return first * second;
		});
	
	};
}





























