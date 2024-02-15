// Prototypes in JS
/* A javascript object is an entity having state and behaviour (properties and method).
JS objects have a special property called prototype.
We can set prototype using __proto__
*/

const student = {
    fullName: "Akhil Verma",
    marks: 98,
    calc(){
        console.log("Hello");
    }
};

const akObj = {
    salary: 103200,
};

akObj.__proto__ = student;
console.log(akObj);

// Classes in JS
/*
Class is a program-code template for creating objects.
Those objects will have some state (variables) & some behaviour (functions) inside it.

class MyClass {
    constructor {... }
    myMethod() {... }
}

let myObj = new MyClass() ;
*/

class ToyotaCar {
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }
}

let fortuner = new ToyotaCar();
console.log(fortuner);
console.log(typeof(fortuner));
console.log(fortuner.start);

// Constructor() method is:
    // automatically invoked by new
    // initializes object



// Inheritance in JS
/*
inheritance is passing down properties & methods from parent class to child class.

class Parent {
}
class Child extends Parent {
}

*If Child & Parent have same method, child's method will be used. [Method Overriding]
*/


// super Keyword
/*
The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
super( args ) // calls Parent's constructor
super.parentMethod (args )
*/

// Error Handling
/* 
try-catch
try {
    ... normal code 
} catch (err ) {  //err is error object
    ... handling error
｝
*/

