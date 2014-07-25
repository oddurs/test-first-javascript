// 05_pig_latin

// Takes a string as an argument
function translate (str) {
	// Splits each word into elements of an array, arr
  var arr = str.split(" "),
  	// Regular expression defined (explained below)
    reg = /\b([^aeiou]?qu|[^aeiou]{1,3})(.*\b)/i;
  // Loop through each element of the array
  for (i = 0; i < arr.length; i++) {
  	// Convert each element to a string and use replace to find the 
  	// matching parts and relocate them using backreferences.
    arr[i] = arr[i].toString().replace(reg, "$2$1") + "ay";
  }
  // Join the array with spaces in between.
  return arr.join(" ");
}

// So, this took me a while to figure out.

// Justin Greenberg posted on Piazza and teased his shorter solution
// where he used a regular expression to solve this problem. I had
// previously made a much more conveluted solution.

// I took the lynda.com tutorial on Regular Expressions because the
// reading material in Eloquent Javascript didn't explain them well
// enough. I highly recommend this course, it is very clearly organ-
// ized

// http://www.lynda.com/Regular-Expressions-tutorials/Using-Regular-Expressions/85870-2.html

// The only exception in the tests that couldn't be covered by the 
// [^aeiou]{1,3} expression was the 'qu', which could be preceeded
// by an optional consonant like so: [^aeiou]?qu

// (.*\b) defines the second backreference, $2.

// The expression is trailed by i, which indicates that it is inse-
// nsitive to case.