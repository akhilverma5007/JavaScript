/**
 Sync in JS
Synchronous
→ (2)
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.
Asynchronous
Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the Ul.
Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
 */

console.log("one");
console.log("two");
console.log("three");
// This is known as syncronous programming

setTimeout(() => {
    console.log("hello");
}, 4000); //timeout

console.log("four");
console.log("five");

// Callbacks - A callback is a function passed as an argument to another function.

// Callback Hell
/* 
Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)
This style of programming becomes difficult to understand & manage.
*/


/*
Promises
A JavaScript Promise object can be:
• Pending: the result is undefined
• Resolved : the result is a value (fulfilled)
• Rejected : the result is an error object
*Promise has state (pending, fulfilled) & some result (result for resolve & error for reject).
*/

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => { 
//         setTimeout (() =>
//     // console. log ("data", datald) ;
//     // resolve ("success");
//             reject ("error");
//                 if (getNextData) {
//                     getNextData();
//                 }
//             }, 5000);
//         });   
//     }
    
// promise.catch
// proties.then

/*
Async-Await
async function always returns a promise.
async function myFunc() { .... }
await pauses the execution of its surrounding async function until the promise is settled.
*/