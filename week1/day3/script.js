// // Day 2: Exercises 

// // Exercise level 1  

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.


let firstName = 'Sandree' 
let lastName = ' Antang'
let country = 'Philippines'
let city = 'Caloocan'
let age = 20
let isMarried = false
let year = 2025

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// Check if type of '10' is equal to 10

console.log(typeof '10' == 10)

// Check if parseInt('9.8') is equal to 10

console.log(parseInt(9.8) == 10)

// Boolean value is either true or false.

let Boolean = true || false
console.log(Boolean)

// Write three JavaScript statement which provide truthy value.

let java1 = true
let java2 = 10 > 5
let java3 = ("hello" == "hello")

console.log(java1, java2, java3);


// Write three JavaScript statement which provide falsy value.

let java4 = false
let java5 = 0 > 5
let java6 = ("hello" == "hi")

console.log(java4, java5, java6);

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3  = true
// 4 >= 3 = true 
// 4 < 3 = false
// 4 <= 3 = false
// 4 == 4 = true
// 4 === 4 = true 
// 4 != 4 = false
// 4 !== 4 = false 
// 4 != '4' = false 
// 4 == '4' = false
// 4 === '4' = false 
// Find the length of python and jargon and make a falsy comparison statement.

console.log('phython'.length == 'jargon'.length)

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 //true 
// 4 > 3 && 10 > 12 //false
// 4 > 3 || 10 < 12 //true
// 4 > 3 || 10 > 12 //true
// !(4 > 3) //false
// !(4 < 3) //true
// !(false) //true
// !(4 > 3 && 10 < 12) //false
// !(4 > 3 && 10 > 12) //false
// !(4 === '4') //true
// There is no 'on' in both dragon and python

console.log('dragon'.includes('on') == 'python'.includes('on'))

// Use the Date object to do the following activities
let date = new Date()
// What is the year today?
console.log(date.getFullYear)
// What is the month today as a number?
console.log(date.getMonth)

// What is the date today?
console.log(date.getDate)

// What is the day today as a number?
console.log(date.getDay)

// What is the hours now?
console.log(date.getHours)

// What is the minutes now?
console.log(date.getMinutes)

// Find out the numbers of seconds elapsed from January 1, 1970 to now.

console.log(date)

// Exercises: Level 2
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// // The area of the triangle is 100
// // Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// let base = Number(prompt("Enter base: " ))
// let height = Number(prompt('Enter height: ' ))
// let area = 0.5 * base * height

// alert('The area of the triangle is' + area) //100

// // Enter side a: 5
// // Enter side b: 4
// // Enter side c: 3
// // The perimeter of the triangle is 12

// let a = Number(prompt('Enter side a :'))
// let b = Number(prompt('Enter side b :'))
// let c = Number(prompt('Enter side c :'))
// let parameter = a + b + c 

// alert(parameter) // 12
// // Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))


// let length = Number(prompt("Enter length : "))
// let width = Number(prompt('Enter width : '))
// let arearectangle =  length * width
// let perimeter = 2* (length + width)

// console.log(arearectangle,perimeter)
// // Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius = Number(prompt("Enter raduis"))
// let PI = 3.14
// let areacircle = PI * radius * radius
// let circumference = 2 * PI * radius

// alert('The area of circle is : ' + areacircle + 'and the circumference of a circle is : ' + circumference)


// // Calculate the slope, x-intercept and y-intercept of y = 2x -2


// // Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// // Compare the slope of above two questions.

// // Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// // Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// // Enter hours: 40
// // Enter rate per hour: 28
// // Your weekly earning is 1120

// let hours = Number(prompt('Enter Hours : '))
// let rate = Number(prompt('Enter rate per hour : '))
// let weekly = hours * rate

// alert(weekly)


// If the length of your name is greater than 7 say, your name is long else say your name is short.

let name = 'Sandreea'

name.length > 7 ? console.log('long') : console.log('short')

// Compare your first name length and your family name length and you should get this output.


// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

firstName.length > lastName.length ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`) : console.log(`Your family name, ${lastName} is longer than your first name,  ${firstName}`)

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

let myAge = 250
let yourAge = 25

myAge > yourAge ? console.log(`I am ${myAge - yourAge} years older than you.`) : console.log(`You're ${myAge - yourAge} years older than me.`)

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.


// let now = new Date()
// let birthyear = Number(prompt('Enter birth year: '))
// let agee = now.getFullYear() - birthyear 
// let allowedtodrive =  18 - agee 

// agee > 18 ? alert(`You are ${agee}. You are old enough to drive`) : alert(`You are ${agee}. You will be allowed to drive after ${allowedtodrive} years.`)

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let numberofyears = Number(prompt('Enter number of years you live:'))
// let lived = numberofyears * 365 * 24 * 60 * 60 

// alert(lived)
// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

let now = new Date() 

console.log (`Time and Date ( YYYY-MM-DD HH:mm ) : ${now.getFullYear()}-${now.getMonth()}-${now.getDay()}  ${now.getHours()}:${now.getMinutes()}`)
console.log (`Time and Date ( DD-MM-YYYY HH:mm ) : ${now.getDay()}-${now.getMonth()}-${now.getFullYear()}  ${now.getHours()}:${now.getMinutes()}`)
console.log (`Time and Date ( DD/MM/YYYY HH:mm ) : ${now.getDay()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)

