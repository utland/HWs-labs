'use strict';

// Generate random Number between from min to max
// Use Math.random() and Math.floor()
// See documentation at MDN

const random = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(random(20, 10));
console.log(random(50));
