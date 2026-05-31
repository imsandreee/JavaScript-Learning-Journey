const dog = {
    name: 'Kai' ,
    legs: 4 ,
    color: 'brown-white',
    age: 1, 
    bark: () => {
        return 'woof woof'
    }
}


console.log(` my dog name is ${dog.name} she has ${dog.legs} legs & color ${dog.color}, she is ${dog.age} year old, she barks ${dog.bark()}`)

dog["breed"] = 'corgi';
dog["getDogInfo"] = 'dawg'



const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

function getUser() {
    for (const [username,profile] of Object.entries(users)) {
        if (profile.skills.length > 5 ) {
            console.log(`${username}`)
        }
    }
}

const morePoints = function() {
    for (const [username,profile] of Object.entries(users)) {
        if (profile.points >= 50){
            console.log(`${username}`)
        }
    }
}

function getMERN() {
    for (const [username,profile] of Object.entries(users)) {
        if (profile.skills.includes('MongoDB'), 
        profile.skills.includes('Express'),
        profile.skills.includes('React'),
        profile.skills.includes('Node')){
            console.log(`${username}`)
        }
    }
}




users.sandree = {
    email: 'antang.sandree.lebiCo@gmail.com' ,
    skills: ['HTML', 'CSS', 'Javascript'],
    age: 21 ,
    isLoggedIn: false ,
    points: 50

};
console.log(Object.keys(users))
console.log(Object.values(users))

