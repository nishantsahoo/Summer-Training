/**
 * Created by Nishant on 6/8/2017.
 */

/* Closure example
* Closure scope
* */

function counterGen(num) {
    var localNum = num;
    return {
        val: localNum, // copy by value

        increment: function () {
            localNum;
        },

        decrement: function () {
            localNum;
        },

        getValue: function () {
            return localNum;
        }
    }
} // end of the function counterGen

var c = counterGen(10);
// console.log(c); c has an object
console.log(c.getValue());
console.log(c.increment());
console.log(c.val); // returns 10 because val is assigned 10 by value
console.log(c.getValue()); // returns 11 as localNum is changed

// in JS, assignment is done by pass by value
// in JS, all parameters sent as parameters to functions are pass by value
// data passed to a key of an object is passed by reference
// only if the object is created inside the given scope, closure takes place. As in the arguements inside that scope will
// be available to that object