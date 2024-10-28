'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    {name:'Marcus Aurelius', phone:'+380445554433'},
    {name:'Ilya Sizonenko', phone:'+380367842881'},
    {name:'Michal', phone:'+380927422789'},
    {name:'Anton', phone:'+380762890923'},
    {name:'John', phone:'+380334412567'}
];

const findPhoneByName = (name) => {
    for (let e of phonebook) {
        if (e.name === name) {
            return e.phone;
        }
    }
    return "number is not found"
};

console.log(findPhoneByName("Anton"))
