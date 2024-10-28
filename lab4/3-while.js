'use strict';

// Use while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let sum = 0;
  let counter = 0;
  while(counter < args.length) {
    sum += args[counter];
    counter++;
  }
  return sum;
};

console.log(sum(10, 5, 3, 1))
