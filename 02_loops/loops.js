// 02_loops

// Repeats a string mult times
function repeat (str, mult) {
	out = "";
	for (var i = 0; i < mult; i = i + 1) {
		out += str;
	};
	return out
}

// Joins strings in an array
function join (arr, del) {
	var out = "";
  if (del == undefined) {
    del = "";
  }
	out = arr.join(del);
	return out;
}

// Computes the sum of an array
function sum (arr) {
	out = 0;
	for (i = 0; i < arr.length; i = i + 1) {
		out += arr[i];
	}
	return out;
}

// Loops over and joins into a string with &
function paramify (hash) {
	out = [];
	for (obj in hash) {
		if (hash.hasOwnProperty(obj)) {
			out.push(obj + "=" + hash[obj]);
		}
	}
	return out.sort().join("&");
}

// Recursive factorial function num!
function factorial (num) {
	if (num < 0) {
		return -1;
	} else if (num == 0) {
		return 1;
	} else {
		return (num * factorial(num - 1));
	}
}

// Concatinates variable amount of arguments into string
function concat_string () {
	arr = [];
	for (var i = 0; i < arguments.length; i = i + 1) {
		arr.push(arguments[i]);
	}
  return (arr.join(""));
}