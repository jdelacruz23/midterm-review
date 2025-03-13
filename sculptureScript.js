const sculptureList = require('./data.js'); // import data.js

const sculptureListLengths = []

sculptureList.forEach(obj => {
    const objLength = {}; 
    for (const item in obj) {
        //object.assign(target, source)
        Object.assign(objLength, {
            [item]: String(obj[item]).length
        });
    }

    sculptureListLengths.push(objLength);
});

//checking
// sculptureList.forEach(obj => {
//     for(const item in obj){
//         console.log(`${item}, ${(obj[item]).length}`)
//     }
// })

console.log(sculptureListLengths)