'use strict';

// Use nested for loop to find max value in 2d matrix
// For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// should return 9

const max = (matrix) => {
  const array = matrix.flat();
  let max = array[0];
  for(const e of array) {
    if (e > max) {
      max = e;
    }
  }
  return max;
};

console.log(max([[1, 2, 3], [67, 5, 6], [7, 8, 9]]))
