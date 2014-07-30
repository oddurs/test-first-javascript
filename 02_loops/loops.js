// 02_loops

// Repeats a string mult times
function repeat (str, num) {
	out = []
	for (var i = 0; i < num; i++) {
		out.push(str);
	}
	return out.join("");
}

// NOTE: it is more performant to use an array method.

// Joins strings in an array
function join (arr, del) {
	out = "";
	for (var i = 0; i < arr.length; i++) {
		out += arr[i]
		if (i !== arr.length -1 && typeof del !== "undefined") {
			out += del;
		}
	}
	return out;
}

// Computes the sum of an array
function sum (arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

// Loops over and joins into a string with &
function paramify (obj) {
	var out = [];
	for (key in obj) {
		if(obj.hasOwnProperty(key)) {
			out.push(key + "=" + obj[key]);
		}
	}
	return out.sort().join("&");
}

// Recursive factorial function num!
function factorial (num) {
	if (num < 0) {
		return -1;
	} else if (num === 0) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

// Concatinates variable amount of arguments into string
function concat_string () {
	return join(arguments, "");
}