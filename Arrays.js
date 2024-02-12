//Arrays - Collections of items - Array is a special type of object
let arr = [10,20,30,40,50];
console.log(arr);

// for (let key in arr){
//     console.log(arr[key]);
// }

for (let i = 0; i<=arr.length; i++){
    console.log(arr[i]);
}

let str = ["ironman", "superman", "spiderman", "batman"];
for (let i in str){
    console.log(i + " = " + str[i]);
}

console.log(str.length);
console.log(str[2]);

str[0] = "ChangedValue"
console.log(str);

//Strings are Immutable, But Arrays are Mutable 

let heros = ["ironman", "superman", "spiderman", "batman"];

//For loop
for(let i = 0; i < heros.length; i++){
    console.log(i + " = " + heros[i]);
}

//For in loop
for(let each in heros){
    console.log(each + " = " + heros[each]);
}

//For of loop
for(let each of heros){
    console.log(each);
}

//Question - For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let number_of_values = marks.length;
let total_marks = number_of_values * 100;
let sum_of_all_values = 0;
for (let i = 0; i < marks.length; i++){
    sum_of_all_values += marks[i];
}

let average = sum_of_all_values / number_of_values
console.log(average);
console.log("\n")

//Question - For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let prices = [250, 645, 300, 900, 50];

for (let each in prices){
    console.log("Values Before Offer: " + prices[each]);
    discounted_price = prices[each] - ((prices[each] * 10) / 100);
    console.log("Values After Offer: " + discounted_price);
    prices[each] -= ((prices[each] * 10) / 100);
}
console.log(prices);


//Array Methods
//1. push() : add to end
//2. pop() : delete from end & return
//3. toString() : conerts array to string
//4. concat() : joins multiple arrays & returns result
//5. unshift() : add to start (Like Push)
//6. shift() : delete from start & return (Like Pop)
//7. slice() : returns a piece of the array
//8. spice() : change original array (add, remove, replace)

let foodItems = ["apple", "orange", "lichi", "chiku"];
foodItems.push("banana","chips");
console.log(foodItems);
foodItems.pop();
console.log(foodItems); //here original array is being changed
console.log("String: " + foodItems.toString()); // returns a new string dont change the original array

let marvels = ["spiderman", "batman", "ironman"];
let bollywood = ["sharukhan", "ranveerSingh", "Salmankhan"];
console.log(marvels.concat(bollywood)); //it will create a new array

console.log(marvels.unshift("Superman"));
console.log(marvels.shift());

console.log(bollywood.slice(1,3));

let numbers = [1,2,3,4,5,6,7];
//Add Element
console.log(numbers.splice(2,2, 101,102));
//Delete Element 
numbers.splice(3,1);
//Replace Element
numbers.splice(3,1,101); 
console.log(numbers);

//Question - Create an array to store companies -> 
//"Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
//a. Remove the first company from the array
//b. Remove Uber & Add Ola in its place
//c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
removed_item = companies.shift();
console.log("Remove First company a: " + removed_item);
console.log(companies.splice(1,1,"Ola"));
console.log("Updated b: " + companies);
console.log("Add Amazon at the end c: " + companies.push("Amazon"));
console.log(companies);