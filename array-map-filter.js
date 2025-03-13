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
