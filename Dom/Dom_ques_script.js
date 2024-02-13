//Question - Create a H2 heading element with text - "Hello JavaScript". 
//Append "from College students" to this text using JS.

let stringChange = document.querySelector("h2");
// console.log(stringChange);
console.dir(stringChange.innerText);
stringChange.innerText = stringChange.innerText + "  from College students.";


//Qs. Create 3 divs with common class name - "box".
//Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
console.log(divs);
console.dir(divs);

let idx = 1;
for(div of divs){
    div.innerText = `new Divss ${idx}`;
    idx++;
}


// divs[0].innerText = " new Unique value 1";
// divs[1].innerText = " new Unique value 2";
// divs[2].innerText = " new Unique value 3";


