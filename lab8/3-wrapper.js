'use strict';

const contract = (fn, ...types) => {
    if (typeof fn !== "function") throw new Error("The first argument is not a function");

    const res = (...parametrs) => {
        try {
            for (let i = 0; i < types.length - 1; i++) {
                if (typeof parametrs[i] !== types[i].name.toLowerCase()) {
                    throw new TypeError(`Type of ${i + 1} argument is ${typeof parametrs[i]}. It must be ${types[i].name.toLowerCase()}`);
                }
            }
            if (typeof fn(...parametrs) !== types[types.length - 1].name.toLowerCase()) {
                throw new TypeError(`Type of returned object is ${typeof fn(...parametrs)}. It must be ${types[types.length - 1].name.toLowerCase()}`);
            }
                
            return fn(...parametrs);
        } catch (error) {
            console.log(`Error! ${error.message}`)
        }
    }
    
    return res;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(10, 7))

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings("Hello", 34))
