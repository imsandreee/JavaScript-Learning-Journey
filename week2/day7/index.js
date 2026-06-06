const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// // Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

let [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants

console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp)
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin,est,sw,den,nor] = countries
console.log(fin,est,sw,den,nor)
// Destructure the rectangle object by its properties or keys.

let {width: w,height: h,area: a,perimeter: p} = rectangle 

console.log(w,h,a,p)


// Iterate through the users array and get all the keys of the object using destructuring

for (const {name,scores,skills,age} of users) {
    console.log(name,scores,skills,age)
}

// Find the persons who have less than two skills

const lessTwoSkills = users.filter(({skills}) => skills.length < 2);

console.log(lessTwoSkills);

// Destructure the countries object print name, capital, population and languages of all countries

const {name = 'Philippines', capital = 'Manila', population = 143000000, languages = 'tagalog'} = countries

console.log(name,capital,population,languages)

// Write a function called convertArrayToObject which can convert the array to a structure object.
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]

      function convertArrayToObject(arr) {
        const result = []
            for (const [name, skills, score] of arr) {
                result.push({name,skills,score})
            }

        return result;
      }

    console.log(convertArrayToObject(students))

const studentsObj = convertArrayToObject(students);

const student = studentsObj[0]; // David
const newStudent = {
  ...student,
  skills: {
    ...student.skills,
    frontend: [
      { skill: 'Bootstrap', level: 8 }
    ],
    backend: [
      { skill: 'Express', level: 9 }
    ],
    database: [
      { skill: 'SQL', level: 8 }
    ],
    dataScience: [
      { skill: 'SQL' } // no level
    ]
  }
};

console.log(newStudent);
