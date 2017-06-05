0.1 + 0.3
// >0.4
0.3 + 0.2
// >0.5
0.3 - 0.1
// >0.19999999999999998

0.4 - 0.1
// >0.3
// These errors occur since some numbers can't be represented in binary. Look this up. Floating points and precision points. Might be important, or not.

1 == '1' // *Checks values*
// >true
1 === '1' // *Checks value and type*
// >false
false == 0
// >true
[] == ""
// >true
[] === ""
// >false
[1,2] == [1,2]
// >false
0 == []
// >true
0 === []
// >false

b = new Array()
// >[]
b = []
// >[]

k = new Object()
k = {}

[] + {} // types are ***cohersed*** into an empty string
// >"[object Object]"

'' + []
// >""

{} + []
// >0

// anything after an operator has to be a value
// unary operator on a empty array or string is 0

// so if {} is written before the operator, it is considered as 'codeblocks', which has no code. eg. for(){ } // empty codeblocks


// In the below example, a function is passed as an arguments. Js allows this feature.
function yo() {
	console.log('yo');
}

function doYo(fun) {
	fun();
}

doYo(yo);
// >yo

function yoGen(name) {
	return function() {
		console.log('Yo ' + name + '!')
	}
}

var newFun = yoGen('Nishant');
newFun();

var x = function (name) {
	console.log('Yo ' + name + '!')
}
x('Nishant')
