'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    if (array.includes(item)) {
      const index = array.indexOf(item);
      array.splice(index, 1);
    }
  }
  
};
const array = ["Berlin", "London", "Paris", "Kiev", "Rome", "Warsaw"];
removeElements(array, "Warsaw", "Paris");
console.log(array);
