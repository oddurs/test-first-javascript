// 03_calculator

// Constructor function that can add and subtract values.
function Calculator () {
	var value = this.valArr;
  this.valArr = [0];
  this.value = function () {
    return this.valArr[this.valArr.length - 1]
  };
  this.add = function (num) {
    this.valArr.push(this.valArr[this.valArr.length - 1] + num);
  };
  this.subtract = function (num) {
    this.valArr.push(this.valArr[this.valArr.length - 1] - num);
  };
}