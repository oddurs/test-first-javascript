// 03_calculator

// Constructor function that can add and subtract values.

function Calculator () {
	this.currentValue = 0;
}

Calculator.prototype.value = function () {
	return this.currentValue;
}

Calculator.prototype.add = function (num) {
	return this.currentValue += num;
}

Calculator.prototype.subtract = function (num) {
	return this.currentValue -= num;
}