
//Conditional Statements - To implement some condition in the code
//if statement
age = 18;
if(age === 18){
    console.log("You're Eligible.")
}else{
    console.log("You're not Eligible")
}

//Check Whether number is Even or Odd
let number = 10;
if(number % 2 === 0){
    console.log("Number is Even");
}else{
    console.log("Number is Odd");
}

//else-if statement
if(age <= 18){
    console.log("Valid");
} else if(age > 60){
    console.log("Mediate");
} else{
    console.log("Invalid");
}



//Switch Statement
const expr = 'Akhil';
switch(expr) {
    case 'Ab':
        console.log("Ab");
    case 'Akhil':
        console.log("Akhil"); 
    // break;
    // continue;
    default:
        console.log("Sorry invalid Output");
}

alert("hello"); //one time pop-up
let promptA = prompt("hellloooo"); //also takes input
console.log(promptA);

//Practice Question
// Get user to input a numbber using prompt ("Enter a number"). Check if the number is a multiple of 5 or not.
console.log("Program to check if the number is multiple of 5 or not. \n")
let userInput = prompt("Hello type a number! ")
if(userInput % 5 === 0){
    console.log("It's a multiple of 5")
}else{
    console.log("Sorry its not a multiple of 5.")
}


/* Question 2
Write a code which can give grades to students according to their scores:
    80-100  A
    70-89   B
    60-69   C
    50-59   D
    0-49    E
    */

let student_grades = prompt("Tell us Your Grades");
let grade;
if(student_grades >= 90 && student_grades <= 100){
    grade = "A";
} else if(student_grades >= 70 && student_grades <= 89){
    grade = "B";
} else if(student_grades >= 60 && student_grades <= 69){
    grade = "C";
} else if(student_grades >= 50 && student_grades <= 59){
    grade = "D";
} else if(student_grades >= 0 && student_grades <= 49){
    grade = "E";
} 
console.log(grade);
