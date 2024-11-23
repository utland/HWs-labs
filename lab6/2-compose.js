'use strict';

const compose = (...fns) => {
    const handlers = [];
    const composed = (x) => {
        let res;
        try {
            for (const fn of fns) {
                if (typeof fn !== "function" && fns.length === 0) throw new Error("Arguments are empty or not functions")
            }
            res = fns.reduceRight((acc, fn) => fn(acc), x);
        } catch (error) {
            for (const handler of handlers) {
                console.log(error.message)
                handler(error);
            }
        }
        return res;
    }
    composed.on = (event, handler) => {
        if (event === "error") {
            handlers.push(handler);
        }
    }
    return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const fn1 = compose(inc, twice, cube);
const fn2 = compose(inc, inc);
const fn3 = compose(inc, 35, cube);

fn1.on("error", () => console.log("Error occured in fn1"))
fn2.on("error", () => console.log("Error occured in fn2"))
fn3.on("error", () => console.log("Error occured in fn3"))
fn3.on("error", (e) => console.log(e.message))

console.log(fn1(5));
console.log(fn2(8))
console.log(fn3(5));

