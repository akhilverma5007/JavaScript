//Javascript is a programming language. We use it to give instructions to the computer.
//Simplest way to run JS is Go to Your Browser -> Inspect -> Console
//For running and seeing the output of JS file we have to create a html file, because html is dirctly connected to browser
//And Js is connected to html, so automatically Js will be connected to browser as well

console.log("Hello JS!");
console.log('Hello');

//Variables in JS (Variables are containers for data.)

fullName = "Akhil Verma"; //(Camel case)
console.log(fullName);
fullname = "verma";
console.log(fullname);
age = 27;
price = 99.99;
x = null; //defined but empty
y = undefined; //Not defined
isFollow = true;
console.log(x);

/*
let, const & var
var : Variable can be re-declared & updated. A global scope variable. 

// After 2015, ES6 is introduced with let and const
let : Variable cannot be re-declared but can be updated. A block scope variable.
const : Variable cannot be re-declared or updated. A block scope variable.
*/

var age = 24;
var age = 20;
var age = 50;
console.log(age);
//Not a good way to declare a variable

let age1 = 34;
age1 = 40;
console.log(age1);
//can only update not re-declare

const age2 = 34;
// age2 = 32; cannot be redeclared and updated
console.log(age2);

/*Data Types in JS
Primitive DataTypes (7)
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

Non-Primitives
1. Objects (Collection of Values) key : value
(Arrays, Functions)
*/

console.log(typeof age1)

//Object creation
const student = {
    fullName : "Akhil Verma",
    age : 27,
    cgpa : 7.8,
    isPass : true,
};

console.log(typeof student);
console.log(student["fullName"]);
console.log(student)
console.log(student.age)
console.log(student["age"]);
student["age"] = student["age"] + 1;
console.log(student["age"]);

//We can change or update the keys even if its a constant object

//Problem: Create a const object called "product" with storing some information
const product = {
    productName : "Parker Jotter Standard CT Ball Pen (Black)",
    rating : 4,
    offer : "Deal of the day",
    noOfPeopleBought : 7002,
    price : 270,
    mrpPrice : 285,
    discount : 5, 
};

console.log(product);
console.log(typeof(product["noOfPeopleBought"]));
console.log(typeof(product["offer"]));

console.log("abcd" + 1);