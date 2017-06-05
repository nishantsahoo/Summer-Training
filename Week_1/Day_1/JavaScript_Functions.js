function hello () {
	console.log('hello');
}
// >undefined

hello() // calling of the function hello
// >hello

function add(a,b) {
	console.log((a+b));
}
// >undefined

add(1,2)
// >3
add("hello","lol")
// >hellolol
// >undefined

add("hello",3)
// >hello3
// >undefined

/* Note:

function add(a,b=0, c=a) { // default value of c can be assigned as a, and b as 0
	console.log((a+b+c));
}
// >undefined

add(b=10,a=14,c=5)
// >29
// >undefined

*/
