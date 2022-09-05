function stopWatch() {
  let count = 0;
  return function watch(){
    count++;
    return count;
  }
}

// function stopWatch() {
//   let count = 0;
//    count++;
//   return count;
// }

const clock1 = stopWatch();
// console.log(clock1());
// console.log(clock1());

console.log(clock1())
