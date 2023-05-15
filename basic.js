const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

//Filters array and returns a new array with numbers greater than 50
const filteredNumbers = numbers.filter((number) => number > 50);
// console.log(filteredNumbers); // [ 55, 65, 75, 85, 95 ]

//Map returns a new array with the result of the function being called on the array
const multipliedNumbers = numbers.map((number) => number * 10);
// console.log(multipliedNumbers); //[ 150, 250, 350, 450, 550, 650, 750, 850, 950 ]

//Accumulates every number into a single value by multiplying each number with each other
const sum = numbers.reduce((acc, curr) => acc * curr);
// console.log(sum); // 1278767724609375

//Checks if every number is less than 1000
const allEven = numbers.every((number) => number < 1000);
// console.log(allEven); // true

//Checks if at least 1 number is even
const hasEven = numbers.some((number) => number % 2 === 0);
// console.log(hasEven); // false

//Returns the first value that is true, in this case the first number in the array thats greater than 35
const firstEven = numbers.find((number) => number > 35);
// console.log(firstEven); //45

//Returns the index of the first element that passes the function
const firstEvenIndex = numbers.findIndex((number) => number > 35);
// console.log(firstEvenIndex); // 3

//Returns if any of the array indexes contain a certain value
const includesThree = numbers.includes(15);
// console.log(includesThree); // true

//Chaining
//Filter returns a new array with all numbers greater than 50 and then sums them up
const chain1 = numbers
	.filter((number) => number > 50)
	.reduce((acc, cur) => acc + cur);
// console.log(chain1); //375

//Find all numbers that are divisible by 5 and then multiply it by 2
const chain2 = numbers.find((number) => number % 5 === 0) * 2;
// console.log(chain2); // 30

//Filter our all numbers less than or even with 50 and then check if the remaining are divisible by 3
const chain3 = numbers
	.filter((number) => number >= 50)
	.some((number) => number % 3 === 0);
// console.log(chain3); // true
