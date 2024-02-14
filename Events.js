/*
Events in JS
The change in the state of an object is known as an Event
Events are fired to notify code of "interesting changes" that may affect code execution.
• Mouse events (click, double click etc.)
• Keyboard events (keypress, keyup, keydown)
• Form events (submit etc.)
• Print event & many more
*/

//Event handling in js
// Priority Html < Js

let ltn1 = document.querySelector("#btn1");
btn1.onclick = () =>{
    console.log("btn1 was clicked.")
}


/* Event Object
It is a special object that has details about the event.
All event handlers have access to the Event Object's properties and methods.
node.event = (e) => {
    //handle here
}
*/

btn1.onmouseover = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log("Screen Position",evt.clientX, evt.clientY);
}

/* Event Listeners / Event Handler
node.addEventListener event, callback)
node.removeEventListener event, callback)
*Note: the callback reference should be same to remove
*/


// const handler2 = 
btn2.addEventListener("click", (evt) => {
    console.log("button1 Clicked");
    console.log(evt);
})
 
// btn2.removeEventListner("click", handler2);

// Question - Create a toggle button that changes the screen 
// to dark-mode when clicked & light-mode when clicked again.

let modeBtn = document.querySelector("#mode");
let currMode = "light"; //dark

modeBtn.addEventListener("click", () => {
    if (currMode === 'light'){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor ="black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currMode);
});