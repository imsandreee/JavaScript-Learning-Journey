// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 name: "John",
//                 role: "Developer"
//             });
//         }, 2000);
//     });
// }

// async function displayUser() {
//     try {
//         const message = await getUser()

//         console.log(message)
//     } catch (error) {
//         console.log(error)
//     }
// }

// displayUser();


// function login(username, password) {
//     return new Promise((resolve, reject) => {
//         if (username === "admin" && password === "12345") {
//             resolve("Login Successful");
//         } else {
//             reject("Invalid Credentials");
//         }
//     });
// }

// async function authenticate() {

//     try {
//     const message = await login("admin", "12335") ;
//         console.log(message);
//     } catch (error) {
//         console.log(error)
//     }
// }

// authenticate();

// let employees = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Mary" }
// ];

// function getEmployees() {
//     return Promise.resolve(employees);
// }

// async function showEmployees() {
//     try {
//         const data = await getEmployees();

//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// showEmployees();


// const verifyAge = (age) => new Promise((resolve, reject) => {
//     if (age >= 18 ) {
//         resolve("Access Granted")
//     } else {
//         reject("Access Denied")
//     }

//     return age;
// })


// // verifyAge(21).then( message => console.log(message ))
// //             .catch( error => console.error(error))
// const  showVerifyAge =  async () => {
//     try {
//         const message = await verifyAge(21);
    
//         console.log(message)
//     } catch (error){
//         console.log(error)
//     }
// }

// showVerifyAge()



// const delayedMessage = () => new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Welcome to JavaScript Promises")
//     }, 3000)

// })

// const showMessage = async () => {
//     try {
//         const message = await delayedMessage();

//         console.log(message)
//     } catch (error) {
//         console.log(error)
//     }
// }


// // showMessage()
// const user = {
//     username: "admin",
//     password: "12345"
// }
// const login = (username, password) => new Promise( (resolve, reject) => {

//     if (username === user.username && password === user.password) {
//         resolve("Welcome")
//     } else {
//         reject("Invalid")
//     }
// })


// const validate = async () => {
//     try {
//         const data = await login("admin", "12345");

//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }

// }

// validate()


const randomNumber = () => new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 100 - 50)
    random > 5 ? resolve(`Success: ${random}` ) : resolve(`Failed: ${random}`)
})

const displayNum = async () => {
    try {
        const num = await randomNumber()

        console.log(num)
    } catch (error) {
        console.log(error)
    }
}

displayNum();