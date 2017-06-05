// Of loop - Returns the values. Works on things that can be iterated. ***Like Arrays. Doesn't work on Objects.***
// In loop - Returns the keys. Works on Objects.

var b = [1,2,3,4]

for (i of b) { console.log(i); }
/* Output
1
2
3
4
undefined
*/

for (i in b) { console.log(i); }
/* Output
0
1
2
3
undefined
*/

var obj = {a: 10, b: "Nishant", c: true}
for (i of obj) { console.log(i); }
// >VM668:3 Uncaught TypeError: undefined is not a function

for (i in obj) { console.log(i); }
/* Output
a
b
c
undefined
*/

for (var i = 0; i<10; i++) {
	console.log("lololol");
}