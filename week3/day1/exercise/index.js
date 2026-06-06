// const users = [
//   { name: "John", age: 17 },
//   { name: "Sarah", age: 25 },
//   { name: "Mike", age: 30 },
//   { name: "Anna", age: 15 }
// ];

// Task

// Create a function getAdults(users) that returns only users who are 18 years old or older.

// const getAdults = users.filter((user) => user.age < 18) 

// console.log(getAdults)



// // Create a function calculateTotal(products) that returns the total price.

// const students = [
//   { name: "John", score: 85 },
//   { name: "Sarah", score: 65 },
//   { name: "Mike", score: 90 },
//   { name: "Anna", score: 70 }
// ];

// // Return students whose score is 75 or higher.
// const findPassedStudent = (students) => {
//     return students.filter((passed) => {
//         return passed.score > 75
//     })
// }

// console.log(findPassedStudent(students))

// const employees = [
//   { name: "John", salary: 25000 },
//   { name: "Sarah", salary: 50000 },
//   { name: "Mike", salary: 35000 }
// ];

// const addStatusProperty = (employees) => {
//     return employees.map((employee) => {
//         let StatusValue = "Junior"

//         if (employee.salary > 40000) {
//             StatusValue = "Senior"
//         }

//         return {
//             ...employee, status: StatusValue
//         }
//     })
// }

// console.log(addStatusProperty(employees))


// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 30000 },
//   { name: "Monitor", price: 15000 }
// ];

// // const mostExpensiveProduct = (products) => {
// //     return Math.max(...products.map( product => product.price))
// // }

// // console.log(mostExpensiveProduct(products))

// const mostExpensiveProduct2 = (products) => {
//     return products.reduce((highest,current) => {
//         return current.price > highest.price ? current : highest ;

//     }) 
// }

// console.log(mostExpensiveProduct2(products));


// const users = [
//   { username: "john", isOnline: true },
//   { username: "sarah", isOnline: false },
//   { username: "mike", isOnline: true },
//   { username: "anna", isOnline: true }
// ];


// const countOnlineUser = (user) => {
//     const onlineuser = user.filter( user => {
//         return user.isOnline === true
//     } )

//     return onlineuser.length

// }

// console.log(countOnlineUser(users))


// // E-Commerce Product Search

// const products = [
//   { id: 1, name: "Laptop", stock: 5 },
//   { id: 2, name: "Mouse", stock: 0 },
//   { id: 3, name: "Keyboard", stock: 10 }
// ];

// const findAvailableProducts = (products) => {
//     let availProducts = products.filter((product) => {
//         return product.stock > 0;
//     })

//     return availProducts;
// }


// console.log(findAvailableProducts(products))

// Exercise 8: Average Student Score

// const students = [
//   { name: "John", score: 90 },
//   { name: "Sarah", score: 80 },
//   { name: "Mike", score: 70 }
// ];

// const calculateAverageStudent = (students) => {

//     const totalGrades = students.reduce((acumulator,student) => {
//         return acumulator + student.score}, 0) 

//     const average = totalGrades / students.length;

//     return average;
// }

// console.log(calculateAverageStudent(students))


// const users = [
//   { email: "john@gmail.com", password: "123456" },
//   { email: "sarah@gmail.com", password: "abcdef" }
// ];

// const login = (email, password) => {

//     for (const user of users) {
//     if (email == user.email && password == user.password) {
//         return "Login Successful"
//     } else 
//         return "Invalid Credentials"
//     }
    
// }

// console.log(login("john@gmail.com", "123456"))


// Exercise 10: Mini Inventory Report (Challenge)

const inventory = [
  { product: "Laptop", stock: 10, price: 50000 },
  { product: "Mouse", stock: 50, price: 1000 },
  { product: "Keyboard", stock: 20, price: 2000 },
  { product: "Monitor", stock: 5, price: 15000 }
];


    // Task 1: Get all products with stock less than 10
        // Task 2: Calculate total inventory value (stock * price) across all items
            // Task 3: Find the single most valuable product (highest price)
                // Task 4: Create a new array containing product name and calculated inventory value
                    // Return all four results bundled together cleanly

const MiniInventoryReport = (inventory) => {
    const productlessthanten = inventory.filter(product => product.stock < 10)
    const calculate = inventory.reduce((accumulator, item) => {
        return accumulator + (item.stock * item.price)
    }, 0)
    const singlemostvalueableProduct = inventory.reduce((highest, current) => {
        return current.price > highest.price ? current : highest})
    const createarray = inventory.map(product => {
        return {
            product: product.product,
            inventoryValue: product.stock * product.price
        }
    })
    

    return {
        productlessthanten,
        calculate,
        singlemostvalueableProduct,
        createarray
    }

}

console.log(MiniInventoryReport(inventory))