'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    const objConst = {
        name: "obj1"
    }

    let objLet = {
        name: "obj2"
    }
    objConst.name = "changedNameInConst";
    objLet.name = "changedNameInLet";

    objLet = 34;
    /*Модифікаторі const та let лише визначають поведінку самої змінної,
    а не об'єкта, на який вона має посилання. */

    console.dir({objConst, objLet});
};

fn()