// Objects in Js are more like HashMaps/Dictionaries
// Basically dictionaries in Python
// Keys are immutable (Strings, Number)
// in Js, objects can be created without defining a class
// Strings can be both 'string' or "string", '' or "" is the same

var obj = {a: 10, b: "Nishant", c: true}
// >undefined
obj
// >Object {a: 10, b: "Nishant", c: true}
obj.a
// >10
obj.b
// >"Nishant"
obj.d
// >undefined

// add a key like this
obj.d = 123
// >123
obj
// >Object {a: 10, b: "Nishant", c: true, d: 123}
delete obj.a
// >true
obj 
// >Object {b: "Nishant", c: true, d: 123}

// The delete operator removes a given property from an object. On successful deletion, it will return true, else false will be returned
obj['b']
// >"Nishant"
obj['Nishant'] = 'Sahoo'
// >"Sahoo"
obj
// >Object {b: "Nishant", c: true, d: 123, Nishant: "Sahoo"}

// Interesting fact:
typeof Object
// >"function"
typeof Array
// >"function"