console.log("Hello");

//Sting is a sequence of characters used to represent text
let str1 = "Akhil verma";
let str2 = 'Anther String';
console.log(str1);
console.log(str2);

//String length
console.log(str1.length);

//String Indices
console.log(str1[0],str1[1],str1[2]);

//Template Literals
let sentence = `This is a template literal`;
console.log(sentence);
console.log(typeof sentence);

let obj = {
    item: "pen",
    price: 10,
};

console.log("the cost of", obj.item, "is", obj.price, "rupees. ");
let output = `the cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);

// String Interpolation
// ${abcccc}

let num_calc = `Total = ${10 + 20 + 20}`;
console.log(num_calc);

//Escape Characters
console.log("Hey! \nMy name is Akhil"); //Next Line
console.log("Hey!\tHello") //Tab Space

//String Methods in Js - Built in functions to manipulate a String
//1. newStr.toUpperCase();
//2. newStr.toLowerCase();
//3. newStr.trim(); //removes whitespaces
//4. newStr.slice(start, end?); //returns part of string
//5. newStr1.concat(newStr2); //joins strings
//6. newStr.replace(searchVal, newVal);
//7. newStr.charAt(idx);

let newStr = " Akhil   Vermaaaa "
console.log("LowerCase Convert: ", newStr.toLowerCase());
console.log("LowerCase Convert: ", newStr.toUpperCase());
console.log("Removing White Spaces: ", newStr.trim());
//these methods will not change the original string(Because strings are IMMUTABLE), this will return a new string

console.log(newStr.slice(0,6));
let tempString1 = "Joining";
let tempString2 = " the String.";
console.log(tempString1.concat(tempString2));

console.log(tempString1.replace("Joining", "Joined"));
console.log(tempString1.charAt(2));

//Question: Prompt the user to enter their full name. Generate a username for them based on the input.
//Start username with @, followed by their full name and ending with the fullname length.

let fullName = prompt("Enter You full name! ");
console.log(fullName);


let username = "@" + fullName.concat(fullName.length);
console.log(username);