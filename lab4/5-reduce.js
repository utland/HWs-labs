'use strict';

// Use Array.prototype.reduce method
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => args.reduce((acc, a) => acc + a, 0);

console.log(sum(10, 5, 3, 1))
