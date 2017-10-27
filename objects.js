//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};
var realMe = {
	'name': 'Tim Sharp',
	'age': 31,
	'hair color': 'black'
}
function change(obj, obj2) {
	me.name = realMe.name
	me.age = realMe.age
	me['hair color'] = realMe['hair color']
	return me
}
//console.log(change(me, realMe))
//2. Iterate over the object to console.log the propery or key names. 

function iterate(obj) {
	for (key in obj) {
	console.log(key)	
	}
}
//iterate(me)