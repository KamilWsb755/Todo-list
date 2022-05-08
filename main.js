

// Filter
const arr = [34,219,109,2934,12,10,29];

const oddNumbers = arr.filter(number=>number%2); 
const evenNumbers = arr.filter(number=>!(number%2));
const numbersBiggerThan100 = arr.filter(number => number > 100);
console.log(oddNumbers);
console.log(evenNumbers);
console.log(numbersBiggerThan100);

// Map
const double = arr.map(number => number * 2);
const people = arr.map(number => number + ' osób')
console.log(people);

// forEach
arr.forEach((number,index)=> arr[index] = number * 2)