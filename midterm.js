'use strict'


console.log("Problem 1: A function that adds key value to an object \n")

const keys = ["Age", "Strength", "Intelligence", "Domain Name", "Height"]
const values = [30, "Very Strong", "Genius", "Infinite Void", `6'1`]
const character = {
    Name: "Gojo Satoru",
}


function addKeyValue(character, keys, values){
    keys.forEach((keys, index) => {
        character[keys] = values[index]        
    });
    // console.log(character[keys]) this is basically saying character["domain name"] which would output Infinite Void. Basically, asking JS to print out the value of the specified property instead of the key
}


addKeyValue(character, keys, values)
console.log(character, "\n")

'use strict'

//!!Problem 2: Delete a Key from an Object

/**
 * Just a simple try-catch error method and checking if it does exists or not. Nothing Fancy
 * 
 */

// const character = {  
//     Name: 'Gojo Satoru',
//     Age: 30,
//     Strength: 'Very Strong',
//     Intelligence: 'Genius',
//     'Domain Name': 'Infinite Void',
//     Height: "6'1"
// }

console.log("Problem 2: Delete a Key from an Object \n")

console.log(`The current object properties of character object are: `, character)

function deleteKeyValue(character, key){
    if (key in character){
        delete character[key]
    }
    else{
        throw new Error(`\n"${key}" Key does not exist in the object!`);
    }
}

try {
    deleteKeyValue(character, "Strength");
    deleteKeyValue(character, "Height");
    console.log("Deleted Strength and Height properties!")
    deleteKeyValue(character, "Powers");
} catch (error) {
    console.error(error.message);  // Output the error message
}
// deleteKeyValue(character)
console.log("\n The object now only contains the following properties: ", character, "\n")

//!!Problem 3: Create HTML Elements

/**
 * My approach is to just store all the accepted inputs into an array so that I don't have a long
 * if statement checking whether or not the input contains either of the accepted ones
 * 
 * only works when ran in browser tho
 * 
 */

console.log("Problem 3: Create HTML Elements \n")

const validElements = ["div", "li", "p", "a"]

function makeElement(elementString, quantity){
    const elementsCreated = []
    if (!validElements.includes(elementString)){
        throw new Error("Input element is not supported!")
    }
    else{
        for(let i = 0; i < quantity; i++){
            const element  = document.createElement(elementString);
            elementsCreated.push(element)
        }
    }
    return elementsCreated;
}
// const elements = makeElement("test", 3);
const elements = makeElement("div", 3);
console.log(elements); 

'use strict'

const students = [
    { name: "Alice", country: "Germany", year: 2, grades: { algorithms: 85, databases: 78 } },
    { name: "Carlos", country: "Brazil", year: 3, grades: { algorithms: 92, databases: 88 } },
    { name: "Fatima", country: "Egypt", year: 1, grades: { algorithms: 75, databases: 70 } },
    { name: "Wei", country: "China", year: 4, grades: { algorithms: 90, databases: 85 } },
    { name: "John", country: "USA", year: 2, grades: { algorithms: 65, databases: 60 } }
];

const algoGrades = students.map((item) => {
    let obj = {}
    obj['name'] = item['name']
    obj['algorithms'] = item['grades']['algorithms']
    return obj
})

console.log(`New object where it only shows the students' names 
    and their grades in algorithms \n`, algoGrades, `\n`)

const passingStudents = students.filter((element) => element['grades']['algorithms'] >= 80)
console.log(`The passing students are: \n`, passingStudents, )

const studentsYearThree = students
.filter((element) =>{
    return element['year'] >= 3
})
.map((element) => {
    return element['name']
})

console.log("\n The students who are year 3 and above are: \n", studentsYearThree)

/**
 * These all came from the 3 js problems
 * review fs-sync and number classification in feb-20
 * 
 * review js-object manipulation
 * 
 * review mar-4
 * 
 * review array and object accessing
 * review maps and sets
 * 
 * review teext-splitter and word frequency
 */