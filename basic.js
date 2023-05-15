const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
const fruits = ["grapefruit", "lemon", "lime", "orange"];

const filteredNumbers = numbers.filter(/* Add filter function here */);
console.log(filteredNumbers);

const doubledNumbers = numbers.map(/* Add map function here */);
console.log(doubledNumbers);

const sum = numbers.reduce(/* Add reduce function here */);
console.log(sum);

const allEven = numbers.every(/* Add every function here */);
console.log(allEven);

const hasEven = numbers.some(/* Add some function here */);
console.log(hasEven);

const firstEven = numbers.find(/* Add find function here */);
console.log(firstEven);

const firstEvenIndex = numbers.findIndex(/* Add findIndex function here */);
console.log(firstEvenIndex);

const includesThree = numbers.includes(/* Add includes function here */);
console.log(includesThree);

const randomMap = fruits
	.sort(/* Add sort function here */)
	.map(/* Add map function here */);
console.log(randomMap);
