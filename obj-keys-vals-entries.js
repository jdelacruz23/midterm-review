"use strict";

const http500errors = {
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required",
};

// const keys = Object.keys(http500errors);
// console.log(keys)
//!! Gives the keys of the object

// const values = Object.values(http500errors);
// console.log(values);
//!! Gives the values in an array

// const entries = Object.entries(http500errors);
// console.log(entries);
//!! Gives the keys and values in an array

console.log("Printing the object turned to array...");
function printHttpErrors(errors) {
  Object.entries(errors).forEach(([code, message]) => {
    console.log(`HTTP ${code}: ${message}`);
  });
}

printHttpErrors(http500errors);

console.log("\nPrinting only the even indexes of the array object...\n");
const keys = Object.keys(http500errors);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  if (i % 2 === 0) {
    console.log(`${key}: ${http500errors[key]}`);
  }
}

console.log("\nDeleting even numbers of indexes of the array object...");
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  if (i % 2 === 0) {
    delete http500errors[key];
  }
}
console.log("\nRemaining properties: \n", http500errors);

//!! Javascript.info two problems solutions

console.log("Javascript.info problem solutions...\n");

/**
 * Problem 1:
 * 
 * There is a salaries object with arbitrary number of salaries.

    Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

    If salaries is empty, then the result must be 0.
 */

console.log("Problem 1\n")

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
  Alice: 400,
  Bob: 150,
  Charlie: 500,
  David: 600,
  Eve: 350,
  Frank: 450,
  Grace: 550,
};

//3650 should be the sum!

// const values = Object.values(http500errors);
//!! Gives the values in an array


function sumSalaries(salaries){
    let salarySum = 0
    for (const salary of Object.values(salaries)){
        salarySum += salary
    }
    return salarySum
}

console.log("The salaries of all people are given: ", Object.entries(salaries))

console.log("The total amount of all the salaries combined are: ", sumSalaries(salaries))

console.log("\nProblem 2\n")
console.log("A function count(obj) that returns the number of properties in the object:\n")

/**
 * Write a function count(obj) that returns the number of properties in the object:
 */

let user = {
    name: 'John',
    age: 30,
    gender: 'Male',
    email: 'john.doe@example.com',
    phone: '+1-234-567-8901',
    hobbies: ['Reading', 'Gaming', 'Traveling'],
    occupation: 'Software Engineer',
    company: {
        name: 'TechCorp',
        position: 'Frontend Developer',
        yearsWorked: 5
    }
};

console.log(user, `\n`)

function count(user){
    console.log(`The number of properties in the object are: `, Object.keys(user).length)
}

count(user)