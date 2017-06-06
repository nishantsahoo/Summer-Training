// Prototypes
// Parent object/ Prototype object

// This is ES5.

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

/*
class Student::A.calc
{
	//
	Student(){

	}
};

int Student::calc(){
	//
}

*/
// 2 approaches
// Composition Made an object for Marks and Student

/* 

function Marks(m1,m2,m3){
	this.m1=m1
	this.m2=m2
	this.m3=m3
}

function Student(name,marks //Object){
	this.name = name
	this.marks = marks
}

Student.prototype.calculate = function(){
	return(this.marks.m1 + this.marks.m2 + this.marks.m3)
}

var m = new Marks(10,20,30)
var s1 = new Student("Nishant", m)


*/

// One function constructor

// There are no "classes" in Js
// We have objects, prototypes, and the prototypical chain
// We have function constructors and the new keywords
// All of these enable to siulate "class-like" functionality in Js = ES5 "Classes"

/* 

Syntactical sugar

eg.
var cl = function(input){
	console.log(input);
}
cl('Hello')
Changed the look but the functionality remained the same

ES6 has classes
- a class keyword
ES6 is new 2015
Think non-classical, looks classical
Classical - C++, Python

ES6 is just syntactical sugar
Don't think in C++ or Java while coding in Java

*/

// Example of ES6

