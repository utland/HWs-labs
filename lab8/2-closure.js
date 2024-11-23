'use strict';

const store = (x) => {
    return () => x;
};

const read = store(5);
const value = read();
console.log(value); 