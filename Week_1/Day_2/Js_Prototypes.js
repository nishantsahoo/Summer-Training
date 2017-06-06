// Prototypes
// Parent object/ Prototype object

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

s1.__proto__ = s2
s2.__proto__ = s3
console.log(s1.__proto__);

/*
Prototypical chain
if s0 doesn't have a data ele, it deligates to the upper chain. s0's proto is checked to see if it has that data ele or not
If s1 doesn't, its parent is checked. If no parent has that data ele, undefined is returned.

     s1 properties - company, name
    /  \
  s0    s2 name, age

  s0.company will print so.company as s0 doesn't have type company

Prototypical inheritance (deligation)

*/

var person = {first: "Amit", last: "Sharma"};

var student = {marks: 100};

student.__proto__ = person;
console.log(student.marks);
console.log(student.first);

// EXAMPLE: Company - Data members: firstname, lastname; Method: greet

function Company(first,last){
	this.firstname = first
	this.lastname = last
}

Company.prototype.greet = function () { // method is in proto to save 
	console.log("Hello from " + this.firstname + " " + this.lastname);
}

var cb = new Company("Nishant", "Sahoo");
cb.greet() // Hello from Nishant Sahoo

// try to understand this
// don't sleep. no. please.

function Student(name, eng, maths, science) { // function constrcutor
	this.name = name
	this.english = eng
	this.maths = maths
	this.science = science
}

Student.prototype.calc = function() {
	console.log(this.english+this.maths+this.science);
}

var s1 = new Student("Nishant Sahoo", 100, 100, 100)
s1.calc()

// __proto__ is a 'property' that points to the parent of an object
// Read objects and protoypes in Javascript from youtube