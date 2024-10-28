'use strict';

// Use do..while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let sum = 0;
  let counter = 0;
  do {
  sum += args[counter];
  counter++;
  } while(counter < args.length) 
  return sum;
};

console.log(sum(10, 5, 3, 1));
