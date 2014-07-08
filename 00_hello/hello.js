// 00_hello

// Says "Hello!" or "Hello <name>!"
function hello (name) {
	if (name == undefined) {
		return "Hello!";
	} else {
		return "Hello, " + name + "!";
	}
}