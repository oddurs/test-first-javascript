// 06_functional

// Returns the length of a string in words
function countWords(str) {
	return str.split(" ").length;
}

// nested function within the return
function makeAdder(num1) {
	return function(num2) { // closure
		return num1 + num2;
	}
}


// standard for loop that takes a function as an argument
function forEach(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

// maps a function to each element of an array
function map(arr, func) {
	var out = [];
	for (var i = 0; i < arr.length; i++) {
		out.push(func(arr[i]));
	}
	return out;
}

// loop that takes arrays and filters them by a conditional function
function filter(arr, func) {
	var out = [];
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			out.push(arr[i]);
		}
	}
	return out;
}

// checks an object to see if it contains an instance of num
function contains(obj, num) {
	var out = false;
	for (val in obj) {
		if (obj.hasOwnProperty(val) && obj[val] === num) {
			out = true;
		}
	}
	return out;
}

// one by one calls a function on each element of an object starting with strt
function reduce(obj, strt, func) {
	var current = strt;
	for (var i = 0; i < obj.length; i++) {
		current = func(current, obj[i]);
	}
	return current;
}

// counts the words in an array of strings
// should be used with reduce...
var countWordsInReduce = function(a, b) {
	var temp = b.split(" "),
		count = 0;
	for (var i = 0; i < temp.length; i++) {
		count++;
	}
	return a + count;
}

// sums the contents of an array
// should be used with reduce
function sum(arr) {
	return reduce(arr, 0, function(a, b) {
		return a + b
	});
}

// checks to see if every instance of an array passes a function test
function every(arr, func) {
	var out = true;
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i]) == false) {
			out = false;
		}
	}
	return out;
}

// checks to see if any instance of an array passes a function test
function any(arr, func) {
	var out = false;
	if (func === undefined) {
		func = function(i) {
			return i;
		}
	}
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i]) === true) {
			out = true;
		}
	}
	return out;
}

// limits a function to incrementing more than once
function once (func) {
	var hasRun = false;
	return (function () {
		if (hasRun === false) {
			func();
			hasRun = true;
		}
	})
}

// wrapper around a function with a closure return
function wrapper (func, wrap) {
	return (function () {
		return wrap(func);
	})
}