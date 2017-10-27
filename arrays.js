//1. What is the lenth of the following contacts array?

var contacts = []; //0


//2. Add the following people to the contacts array.

var jake = {
	name: 'Jake Overall',
	email: 'jake.overall@boisecodeworks.com',
	title: 'founder'
};
var matt = {
	name: 'Matt Overall',
	email: 'matt.overall@boisecodeworks.com',
	title: 'founder'
};
var chris = {
	name: 'Chris Hoyd',
	email: 'chris.hoyd@boisecodeworks.com',
	title: 'founder'
};
var tony = {
	name: 'Tony Carolla',
	email: 'tony.carolla@gmail.com',
	title: 'mentor'
};
var andrew = {
	name: 'Andrew Hansen',
	email: 'andrew.hansen@gmail.com',
	title: 'mentor'
};
var stefan = {
	name: 'Stefan Nuxoll',
	email: 'stefan.nuxoll@gmail.com',
	title: 'mentor'
};
function addStaff(one, two, three, four, five, six) {
	contacts.push(one, two, three, four, five, six)

	return contacts
}
//addStaff(jake, matt, chris, tony, andrew, stefan)

//3. Woops after adding all of those people to the same contacts list you realized you need a list just the mentors. Create a new variable named mentors populate it using contacts array. 

function titleSplit(list) {

	var mentors = []
	//for (var i = 0; i < arr.length; i++) {
		for (var key in list) {
			if (list.hasOwnProperty(key)) {
				var obj = list[key];
				if (obj.title == 'mentor') {
					mentors.push(obj)
				}
			}
		}
		return mentors
	}
//}
//console.log(titleSplit(contacts))