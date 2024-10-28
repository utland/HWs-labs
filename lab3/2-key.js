'use strict';

// Generate string of random characters
// Use Math.random() and Math.floor()
// See documentation at MDN

const generateKey = (length, possible) => {
  let res = [];
  for (let i = 0; i < length; i++) {
    res.push(possible[Math.floor(Math.random() * (length - 1))]);
  }
  return res.toString().replaceAll(",", "");
};

console.log(generateKey(16, 'abcdefghijklmnopqrstuvwxyz0123456789'));
console.log(generateKey(10, 'abcdefghijklmnopqrstuvwxyz0123456789'));
console.log(generateKey(5, 'ewkjfhkrjefhlwhflkwj402989'))
