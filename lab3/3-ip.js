'use strict';

// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with bitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
// Use Array.prototype.reduce of for loop

const ipToInt = (ip = '127.0.0.1') => {
  return ip.split(".").reverse().reduce((acc, a, i) => {
    let shift = parseInt(a);
    for (let j = 0; j < i; j++) {
      shift = shift << 8;
    }
    return acc + shift;
  }, 0)
};

console.log(ipToInt());
console.log(ipToInt("10.0.0.1"));
console.log(ipToInt("192.168.1.10"));
console.log(ipToInt("8.8.8.8"));
