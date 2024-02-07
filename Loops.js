//Loops - Loops are used to execute a piece of code again and again
// for loop
for(let i = 1; i <= 50; i++){
    console.log("Akhil");
}

// Infinte Loop - A loop that never ends (Never Use)

// while loop
let count = 1;
while(count <= 10){
    count++;
    console.log("abc");
}

// do while loop - Runs atleast one time
let j = 1;
do{
    console.log("True");
    j++;
}while(j <= 20);

// for-of loop - Used on Strings/Arrays
//for(let val of strVal){
    //do some work
//}
let len = 0;
let str = "AkhilVerma";
for(let i of str){
    console.log(i);
    len++;
}
console.log(len);

// for-in loop - Used on Objects/Arrays
let student = {
    name: "akhil",
    rollno: 23,
    grade: "A",
};

for (let key in student){
    console.log("Key: ",key, "\nValue: ",student[key]); //this prints keys
}

// Questions
// Print all even numbers from 0 to 100
for(let num = 0; num <= 100; num++){
    if(num % 2 === 0){
        console.log(num);
    }
}

//Q2.
//Create a game where you start with any random game number. 
//Ask the user to keep guessing the game number until the user enters correct value.
let correct_num = 34;
let user_num = prompt("Please enter a number! ");

while(user_num != correct_num){
    user_num = prompt("Opps Guess Again. ")
}
console.log("Yayyy! You guessed it right. ")