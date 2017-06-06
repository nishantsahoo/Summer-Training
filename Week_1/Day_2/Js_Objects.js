// Objects - Key Value pairs

var x = { a:10, b:10 };

var x = new Object();
typeof Object
typeof x

function Person(first, last) { // This is a function constructor
	this.firstname = first;
	this.lastname = last;
}

var person1 = new Person("Nishant", "Sahoo"); // call of the function constructor
var person2 = new Person("Amandeep","Kalsi")
person1 = {}

// new
// 1. Creates an empty object
// 2. Attaches this object to function constructor with this
// 3. Runs the funtion 
// 4. One more thing - later
// sets the object's proto to function constructor's proto 
// 5. Returns the Object var person1 = {...}

var x = new Object();

// Example
// Create 3 objects s1,s2, and s3 of class Student
function Student(name, surname, age) {
	this.name = name
	this.surname = surname
	this.age = age
}
// undefined

Student
/* function Student(name, surname, age) {
	this.name = name
	this.surname = surname
	this.age = age
}
*/

s1 = new Student("Amit", "Sharma", 20)
// Student {name: "Amit", surname: "Sharma", age: 20}
s2 = new Student("Rahul", "Jain", 21)
// Student {name: "Rahul", surname: "Jain", age: 21}
s3 = new Student("Manan", "Agarwal", 34)
// Student {name: "Manan", surname: "Agarwal", age: 34}
