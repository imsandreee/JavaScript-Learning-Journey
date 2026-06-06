// {
//   id: 1,
//   name: "Shiela",
//   course: "BSIS",
//   grades: [85, 90, 88]
// }

let students = [];
let nextId = 1;

function addStudent(name, course, grades) {
    let newStudent = {
        id: nextId,
        name: name,
        course: course,
        grades: grades
    }

    nextId++;

    students.push(newStudent);

    return newStudent;
}

addStudent('name','bsit', [75,75,75])
addStudent('sandree','bsit', [90,75,75])


function getStudents() {

    if (students.length === 0){
        'no student available'
    }
   return students
}

console.log(getStudents())

function getAverage(grades) {
    let sum = grades.reduce( (accumelator, g) => accumelator += g)
    let average = sum / grades.length
    return average;
}

console.log(getAverage([90,96,89]))


function getStudentsWithAverage() {

    return students.map(s => {
        return {...s,avarageGrades: getAverage(s.grades)}
    }
    )
}

console.log(getStudentsWithAverage())

function getTopStudent() {
    return students.reduce( (highest,current) => getAverage(current.grades) > getAverage(highest.grades)? current : highest )
}

console.log(getTopStudent())

function searchStudent(keyword) {
    let student = String(keyword).toLowerCase();

    let matchStudents = students.filter( s => s.name.toLowerCase() === student || s.course.toLowerCase() === student)

    if (matchStudents.length === 0) {
        return 'user not found'
    }
     

    return matchStudents;
}

console.log(searchStudent('sandree'));

function filterByCourse(course) {
    let student = String(course).toLowerCase();

    let matchedCourse = students.filter( s => s.course.toLowerCase() === student);

    return matchedCourse;
}

console.log(filterByCourse('bsit'))


function deleteStudent(id) {
    let selectstudent = students.filter( s => s.id === id);


    students = students.filter(s => s.id !== id);

    return students
}

console.log(deleteStudent(1))



let update = {
    name: 'sandree',
    course: 'bsit',
    grades: [ 90, 90, 90]
}

function updateStudent(id, updatedData) {


    students = students.map(s => {
        if (id === s.id ){
           return {...s, ...updatedData}
        }
    })

    return students
}


console.log(updateStudent(2,update))