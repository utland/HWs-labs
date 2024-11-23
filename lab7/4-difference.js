'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
    const res = [];
    for (const el of array1) {
        if (!array2.includes(el)) {
            res.push(el);
        }
    }
    return res;
};

const array1 = ["Berlin", "Paris", "Kiev", "Rome", "Warsaw"];
const array2 = ["Paris", "Rome", "Bucharest", "Sofia", "Oslo"];
const res = difference(array1, array2);
console.log(res);