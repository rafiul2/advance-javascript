const numbers = [2, 3, 4, 5, 6];

// const result = number.map(function(element){
//   return element * element;
// });
// const square = x => x * x;

const result = numbers.map(x => x * x)
// console.log(result);

// Filter
const bigger = numbers.filter(x => x);
console.log(bigger);