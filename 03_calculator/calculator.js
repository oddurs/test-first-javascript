// 03_calculator

// Constructor function that can add and subtract values.
function Calculator () {
    this.valArr = [0];
    this.value = function valFunc () {
        return this.valArr[this.valArr.length - 1]
    };
    this.add = function addFunc (num) {
        this.valArr.push(this.valArr[this.valArr.length - 1] + num);
    };
    this.subtract = function subFunc (num) {
        this.valArr.push(this.valArr[this.valArr.length - 1] - num);
    };
}