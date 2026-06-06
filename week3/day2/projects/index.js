let students = [];
let nextId = 1;

function addStudent(name, course, age) {
    let newStudent = {
        id:  nextId,
        name: name,
        course: course,
        age: Number(age)
    }

    nextId++;

    students.push(newStudent);

    return newStudent;
}



console.log(addStudent('sandree antang', 'bsis', 21))
console.log(addStudent('janine kaye antang', 'educ', 21))


function getStudents() {

    if (students.length === 0 ) {
        'No students found'
    }
    
    console.log(student)
    
}

function findStudentById(id) {
    return students.find( s => id === s.id)

}

console.log(findStudentById(1))


let update = {
    name: 'sandree',
    course: 'bsit',
    age: Number(21)
}
function updateStudent(id, updatedData) {
    students = students.map( s => {
        if (id === s.id) {
            return {...s, ...updatedData }
        }

        return s;
    })

    return students
}


console.log(updateStudent(1,update))


function deleteStudent(id) {
   let student = students.filter( s => s.id === id )

   if (!student) {
    'Student not found'
       return students;

   }


   students = students.filter( s => s.id !== id);

   return students;
}

console.log(deleteStudent(2))

function searchStudent(keyword) {
    let student = students.filter(s => s.id === keyword || s.name === keyword || s.course === keyword ||s.age === keyword)

    if (student.length === 0) {
       return 'user not found'
    }

    return student;

}

console.log(searchStudent('sandree'))