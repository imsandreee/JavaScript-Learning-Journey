// Day 2: Exercises 

// Exercise level 1  

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days of Javascript'

// 2. Print the string on the browser console using console.log()

console.log(challenge) // 30 Days of Javascript

// 3. Print the length of the string on the browser console using console.log()

console.log(challenge.length) // 21

// 4. Change all the string characters to capital letters using toUpperCase() method

console.log(challenge.toUpperCase()) // 30 DAYS OF JAVASCRIPT

// 5. Change all the string characters to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase()) // 30 days of javascript

// 6. Cut (slice) out the first word of the string using substr() or substring() method

console.log(challenge.substr(0,3)) // 30
console.log(challenge.substring(0,3)) // 30

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(challenge.substring(3)) // Days of Javascript

//8. Check if the string contains a word Script using includes() method

console.log(challenge.includes('script')) // true

//9. Split the string into an array using split() method

console.log(challenge.split(''))  // [ '3', '0', ' ', 'D', 'a', 'y', 's', ' ', 'o', 'f', ' ', 'J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p',  't']

// 10. Split the string 30 Days Of JavaScript at the space using split() method

console.log(challenge.split(' ')) // [ '30', 'Days', 'of', 'Javascript' ]

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(', ' )) // [  'Facebook',  'Google',  'Microsoft',  'Apple',  'IBM',  'Oracle',  'Amazon']

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(challenge.replace('Javascript', 'Phython')) // 30 Days of Phython

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(challenge.charAt(15)) //s

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(challenge.charCodeAt('J')) //51

// 15, Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(challenge.indexOf()) //-1

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log(challenge.lastIndexOf()) //-1

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because')) //31

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.lastIndexOf('because')) //47

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.search('because')) //31

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let text = ' 30 Days Of JavaScript '
console.log(text) //  30 Days Of JavaScript 
console.log(text.trim()) //30 Days Of JavaScript

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.startsWith(30)) //true

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.endsWith("Javascript")) //true

// Use match() method to find all the a’s in 30 Days Of JavaScript

console.log(challenge.match('a')) // [ 'a', index: 4, input: '30 Days of Javascript', groups: undefined ]

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let text1 = '30 days of'
let text2 = 'Javascript'
console.log(text1.concat(text2)) // 30 days ofJavascript

// Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2)) // 30 Days of Javascript30 Days of Javascript

// Exercise Level 2

//Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

let quote = 'There is no exercise better for the heart than reaching down and lifting people up.'

console.log(`The quote ${quote} by John Holmes teaches us to help one another.`)

// Using console.log() print out the following quote by Mother Teresa:

let author = "-- Mother Teresa"

console.log(`Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead. ${author}` )

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let number = 10 
let num = Number(number)

console.log(typeof 10 == typeof num) //true 

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let float = parseFloat('9.8')

console.log(Math.round(float)) //10





