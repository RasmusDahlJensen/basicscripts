const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const fruits = ["apple", "cherry", "banana", "date"];

// Array.prototype.filter():
// Creates a new array with all elements that pass a given test.
// Opretter en ny array med alle elementer, der består en given test.
const filteredNumbers = numbers.filter((number) => number > 2);
console.log(filteredNumbers); // Output: [3, 4, 5, 6, 7, 8, 9]

// Array.prototype.map():
// Creates a new array by calling a provided function on every element in the calling array.
// Opretter en ny array ved at kalde en givet funktion på hvert element i den kaldende array.
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10 ,12 , 14 , 16, 18]

// Array.prototype.reduce():
// Applies a function against an accumulator and each element in the array to reduce it to a single value.
// Anvender en funktion på en akkumulator og hvert element i arrayet for at reducere det til en enkelt værdi.
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 45

// Array.prototype.every():
// Tests whether all elements in the array pass the provided function's test.
// Tester om alle elementer i arrayet består af den givne funktions test.
const allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven); // Output: false

// Array.prototype.some():
// Tests whether at least one element in the array passes the provided function's test.
// Tester om mindst ét element i arrayet består af den givne funktions test.
const hasEven = numbers.some((number) => number % 2 === 0);
console.log(hasEven); // Output: true

// Array.prototype.find():
// Returns the first element in the array that satisfies the provided testing function.
// Returnerer det første element i arrayet, der opfylder den givne testfunktion.
const firstEven = numbers.find((number) => number % 2 === 0);
console.log(firstEven); // Output: 2

// Array.prototype.findIndex():
// Returns the index of the first element in the array that satisfies the provided testing function.
// Returnerer indekset for det første element i arrayet, der opfylder den givne testfunktion.
const firstEvenIndex = numbers.findIndex((number) => number % 2 === 0);
console.log(firstEvenIndex); // Output: 1

// Array.prototype.includes():
// Determines whether an array includes a certain element.
// Afgør om en array indeholder et bestemt element.
const includesThree = numbers.includes(3);
console.log(includesThree); // Output: true

// excample chaining using js on sort and map
//eksempel på chaining sort og map

const randumMap = fruits.sort(() => Math.random() - 0.5).map((fruit) => fruit);
console.log(randumMap);
