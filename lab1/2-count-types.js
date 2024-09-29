const typeCollection1 = { number: 0, string: 0, boolean: 0, function: 0, object: 0 }
const typeCollection2 = {};

const countTypes1 = (arr) => {
    for (const el of arr) {
        typeCollection1[typeof el]++;
    }
}

const countTypes2 = (arr) => {
    for (const el of arr) {
        if (!typeCollection2[typeof el]) {
            typeCollection2[typeof el] = 0;
        }
        typeCollection2[typeof el]++;
    }
}

const array = [true, 'hello', 5, 12, -200, false, false, 'word', () => 0, {a: 12, b: 65, c: "sd"}, [0, 0], true, 19000, "example1", Map]

countTypes1(array);
countTypes2(array);

console.dir({typeCollection1, typeCollection2})

