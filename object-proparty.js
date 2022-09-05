const students = [
  {id: 21, name:'jhon'},
  {id: 31, name:'Don'},
  {id: 41, name:'Von'},
  {id: 61, name:'Fon'}
];

// const names = [];
// for (let i = 0; i < students.length; i++) {
//   const element = students[i];
//   names.push(element.name);
// }

const names = students.map(element=>element.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
// console.log(names);
// console.log(ids);
console.log(bigger);
console.log(biggerOne);