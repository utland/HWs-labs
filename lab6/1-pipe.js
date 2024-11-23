'use strict';

const pipe = (...fns) => { 
    for (const fn of fns) {
        if(typeof fn !== "function") throw new Error("One of arguments is not function!");
    }

    return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const fn1 = pipe(inc, twice, cube);
const fn2 = pipe(inc, inc);
//const fn3 = pipe(inc, 35, cube);

console.log(fn1(5));
console.log(fn2(8))
//console.log(fn3(5));


