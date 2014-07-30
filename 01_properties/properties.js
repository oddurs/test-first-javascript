// 01_properties

// Sets properties of objects x, y and onePlus
function setSomePropertiesOn (obj) {
	obj.x = 7;
	obj.y = 8;
	obj['onePlus'] = function (num) {
		return num + 1;
	}
}