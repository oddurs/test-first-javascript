function repeat (str, mult) {
	out = "";
	for (var i = 0; i < mult; i = i + 1) {
		out += str;
	};
	return out
}

function join (arr, del) {
	var out = "";
  if (del == undefined) {
    del = "";
  }
	out = arr.join(del);
	return out;
}

function sum (arr) {
	out = 0;
	for (i = 0; i < arr.length; i = i + 1) {
		out += arr[i];
	}
	return out;
}

function paramify (hash) {
	out = [];
	for (key in hash) {
		if (hash.hasOwnProperty) {
			out.push(key + "=" + hash[key]);
		}
	}
	return out.sort().join("&");
}

// Factorial function

function factorial (num) {
	if (num < 0) {
		return -1;
	} else if (num == 0) {
		return 1;
	} else {
		return (num * factorial(num - 1));
	}
}

// Concat

function concat_string () {
	arr = [];
	for (var i = 0; i < arguments.length; i = i + 1) {
		arr.push(arguments[i]);
	}
  return (arr.join(""));
}