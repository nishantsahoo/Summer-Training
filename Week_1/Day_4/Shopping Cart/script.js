function doYo(name) {
    return function() {
        console.log('Yo ' + name + '!');

    }
}

var yo = doYo('Arnav');
yo();

// Closure: Variables that are openly available to a function returning a function will also be available to a function
// that is returning a value inside that function
// eg. name is available to both doYo and the function inside it

// this refers to Window while it is being executed in a browser

function Person(name) {
    this.name = name;
    console.log(this==window); // if new is used, false
    console.log(this);
    return 'something'; // accessible when new is not used. If new is used, the returned value is sent to the autobox
    // but not to the assigned variable
}

var p = new Person('Arnav');
// new creates an autobox, an empty scope where the function constructor is executed.

Person('hello'); // here this is the window object. So the window object has a variable name
// prints >hello

// this==window >true // in a console, this refers to the Window object.
// this===window

console.log(this==window); // will be true

// this == window when we're not using using
// this != window when we use 'new' keyword
// autoboxing

// ***AUTOBOXING AND CLOSURE***
