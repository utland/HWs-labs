'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
    const res = [];
    for (const el of array) {
        if (!res.includes(el)) {
            res.push(el);
        }
    }
    return res;
};

const array = ["Berlin", "Berlin", "Paris", "Kiev", "Rome", "Rome", "Warsaw", "Warsaw", "Warsaw"];
const res = unique(array);
console.log(res);
console.log(array);
