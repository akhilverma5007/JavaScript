//Functions - Block of code that performs a specific task, can be invoked whenever needed.
//Functions prevents us from redundency(repetition of codefff)

// Function Defination
function functionName(){
    //do some work
}

// Function Call
functionName();

function functionName(param1, param2){
    //do some work
}

function toAddTwoNumbers(){
    let a = 10;
    let b = 20;
    console.log(a + b);
}

toAddTwoNumbers();

function toAddTwoNumbersPara(num1, num2){ //Parameters -> input
    let sum = num1 + num2; //local variable
    console.log(sum);
}

toAddTwoNumbersPara(100, 20); //Arguments

function userName(name){
    return name;
}

let uName = userName("Akhil");
console.log(uName);

//Arrow Functions - Compact way of writing a function
//const functionName = (param1, param2) => {
    //do some work
//}

const sumFunc = (num1, num2) => {
    return num1 + num2;
}
console.log(sumFunc(1000,2000));

//Practice Ques: Create a function using the "function" keyword that takes a String as an argument &
//returns the number of vowels in the string.

function vowelsConversion(inputStringUser){
    let convertingToLowerCase = inputStringUser.toLowerCase();
    let modifiedStringToList = convertingToLowerCase.split("");
    console.log(modifiedStringToList);

    let noOfVowels = 0;
    for(let i in modifiedStringToList){
        if(modifiedStringToList[i] == 'a' || modifiedStringToList[i] =='e'|| modifiedStringToList[i] == 'i' || modifiedStringToList[i] == 'o' || modifiedStringToList[i] == 'u'){
            noOfVowels += 1;
        }
    }
    console.log("No of vowels in", convertingToLowerCase, "is: ", noOfVowels);

}

vowelsConversion("Akhil verma");

//Using arrow function
const vowelsConversionUsingArrow = (inputStringUser) => {
    let convertingToLowerCase = inputStringUser.toLowerCase();
    let modifiedStringToList = convertingToLowerCase.split("");
    console.log(modifiedStringToList);
    let noOfVowels = 0;
    for(let i in modifiedStringToList){
        if(modifiedStringToList[i] == 'a' || modifiedStringToList[i] =='e'|| modifiedStringToList[i] == 'i' || modifiedStringToList[i] == 'o' || modifiedStringToList[i] == 'u'){
            noOfVowels ++;
        }
    }
    console.log("No of vowels in", convertingToLowerCase, "is: ", noOfVowels);

}
console.log(" ");
vowelsConversionUsingArrow("Akhil");

//Reverse a string
function reverseString(toReverse){
    let stringToList = toReverse.toLowerCase().split("");
    let modifiedReverseString = " ";
    for(let i = stringToList.length - 1; i >= 0; i--){
        modifiedReverseString += stringToList[i];
    }
    console.log(modifiedReverseString);
    // return modifiedReverseString;
}

reverseString("Akhil Vermadhjdjsb");

// Higher Order Functions/Methods
// forEach Loop in Arrays
// arr.forEach(callBackFunction)
// CallbackFunction : Here, it is a function to execute for each element in the Array.
// A callback is a function passed as an argument to another function.

let arr = ["akhil","verma"];
arr.forEach((val) => {
    console.log(val);
})

let numbers = [1,2,3,4,5,6];
numbers.forEach(function printFunc(each){
    console.log(each);
});
console.log("");

// Question: For a given array of numbers, print the square of each value using the forEach loop.
let defaultArray = [1,2,3,4,5,6,7,8];

let square = 0;
defaultArray.forEach(element => {
    square = element * element;
    console.log(square);
});
console.log("");

let nums = [43,64,32];
let calcSquare = (numb) => {
    console.log(numb * numb);
};
nums.forEach(calcSquare);

// Some more Array Methods
//1. Map - Creates a new array with the results of some operation. The value its callback returns are used to form new array.

// arr.map(callbackFnx(value, index, array))

let arr1 = [10,20,30,40];

arr1.map((val) => {
    console.log("MapValue: ",val);
});

//Store the values in new array
let newArr = arr1.map((val) =>{
    return val * val;
});
console.log(newArr);


//2. Filter - Creates a new Array of elements that give true for a condition/filter.
//Eg. all even numbers

// let newArr = arr.filter((val) => {
//     return val % 2 === 0;
// });

// To find out even numbers
let mixNumbers = [1,2,3,4,5,6,7,8,9,10];

let evenNumbersArray = mixNumbers.filter((each)=>{
    return each % 2 === 0;
});
//always creates a new array, doesnt affect the original array
console.log("evenNumbersArray: ",evenNumbersArray);


//3. Reduce - Performs some operations and returns the array to a single value. It returns that single value.
const array1 = [1,2,3,4];
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue)=> {
    accumulator + currentValue, initialValue
});
console.log(sumWithInitial);
console.log("");

//Question - We are given array of marks of students. Filter our of the marks of students that scored 90+.
let studentMarks = [23,90,92,56,95,99,54];
let maxScore = studentMarks.filter((each) => {
    return each > 90;
});
console.log(maxScore);
console.log("Endnnnnnnnnnn")
// Question - Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array. //factorial of n

let userInput = prompt("Enter a number\n ");
let valuesAddedByUser = [];
for(let i = 1; i<=userInput; i++){
    valuesAddedByUser[i-1] = i;
}
console.log(valuesAddedByUser);

let sum = valuesAddedByUser.reduce((res, curr)=>{
    return res + curr;
});
console.log("sum = ",sum);

let factorial = valuesAddedByUser.reduce((res, curr)=>{
    return res * curr;
});
console.log("factorial = ", factorial);