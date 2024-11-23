'use strict';

const removeElement = (array, item) => {
  for (let i in array) {
    if (array[i] === item) {
      array.splice(i, 1)
    }
  }
};

const array = ["Berlin", "London", "Paris", "Kiev", "Rome", "Warsaw"];
removeElement(array, "Warsaw");
removeElement(array, "London");
console.log(array);
