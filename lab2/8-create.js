'use strict';

/* Implement function `createUser` with signature
  `createUser(name: string, city: string): object`.
  Example: `createUser('Marcus Aurelius', 'Roma')`
  will return object `{ name: 'Marcus Aurelius', city: 'Roma' }` */

const createUser = (name, city) => {
  return {name, city};
};

console.log(createUser("Ilya", "Kiev"));
