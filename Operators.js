// Single Line Comments
/* Multiple Line Comments */ 

console.log("hello world")

//Operators - Used to perform some operation on data
// + - * / 
// Modulus % 
//Exponentiation **
let a = 5;
let b = 4;
console.log("Addition of a + b =  ", a + b);
console.log("Substraction of a - b =  ", a - b);
console.log("Multiplication of a * b =  ", a * b);
console.log("Division of a / b =  ", a / b);
console.log("Modulus of a % b = ", a % b);
console.log("Exponent of a ** b = ", a ** b);

//Unary Operators
//Increment ++
//Decrement --

// Pre Increment ++a
// Post Increment a++

// Pre Decrement --a
// Post Decrement a--

console.log("Increment", a++);
console.log("Decrement", a--);

//Assignment Operators 
// =  +=  -=  %=  %=  **=

let num = 10;
num += 10;
console.log(num);

//Comparision Operators
// Equal to  ==
// Not Equal to  !=
// Equal to & type  ===
// Not Equal to & type  !==
// >  >=  <  <=

let num1 = 10;
let num2 = "10";
console.log(num1 == num2); //returns true
console.log(num1 === num2); //returns false (based on datatypes)

//Logical Operators
//Logical AND  &&
//Logical OR  ||
//Logical NOT  !


//Ternary Operator
// condition ? true output : false output
let ratio = 199;
let result = ratio > 100 ? "adult" : "not adult";
console.log(result);

