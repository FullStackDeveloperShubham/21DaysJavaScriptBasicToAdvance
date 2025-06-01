Day 2 – Variables & Data Types

var, let, const

Primitive types (String, Number, Boolean, null, undefined, Symbol)

Variable Declaration (var , let , const)

var 

1.function scope
2.redeclared and updated
3.hoisted but initilized as undefined

var a = 10
var a = 20
console.log(a) // 20

let 

1.Block scope
2.updated but not redeclared
3.not hoisted as same as var

let y = 10;
y = 15; // OK
// let y = 20; // ❌ SyntaxError: Identifier 'y' has already been declared

const

Block-scoped
Cannot be updated or redeclared
Must be initialized when declared

const z = 10;
// z = 20; // ❌ TypeError

Primitive Data Types
1. String

let name = "Alice";
2. Number

let age = 30;
3. Boolean

let isLoggedIn = true;
4. null

let score = null; // Intentionally no value
5. undefined

let x;
console.log(x); // undefined
6. Symbol (ES6)
Used to create unique identifiers


let id = Symbol("id");