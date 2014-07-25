// 06_functional

function countWords (str) {
	var arr = str.split(' ');
	return arr.length;
}

function makeAdder(num) {
	return function (num2) {
		return num + num2;
	}
}

function runMeThreeTimes (num) {
    return num;
}

function forEach (arr, func) {
  for (var i = 0; i < arr.length; i++) {
		func (arr[i]);
	}
}

function map (arr, func) {
	var out = [];
	for (var i = 0; i < arr.length; i++) {
		out.push(func(arr[i]));
	}
	return out;
}

function filter (arr, func) {
	var out = [];
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			out.push(arr[i]);
		}
	}
	return out;
}

// Does obj contain an instance of num
function contains (obj, num) {
  var out = false;
	for (var i = 0; i < obj.length; i++) {
     if (obj[i] === num) {
         out = true;
         return out;
     }   
	}
  return out;
}

function reduce (obj, strt, func) {
	
}










