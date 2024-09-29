const inc1 = (n) => {
    return ++n;
}

const inc2 = (obj) => {
    obj.n++;
}

const a = 5; 
const b = inc1(a); 
console.dir({a, b});

const obj = { n: 5 }; 
inc2(obj); 
console.dir(obj);