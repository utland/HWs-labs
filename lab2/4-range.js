'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
    const array = [];
    const length = end - start;
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
};

console.log(range(15, 30))
