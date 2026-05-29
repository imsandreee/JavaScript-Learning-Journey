// Declare a function fullName and it print out your full name.

function fullname(firstName,lastName) {
  return firstName + lastName;
}

let fullnamee = fullname('Sandree' , 'Antang')

console.log(fullnamee)

//Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(x ,y ){
    return x + y;
}

let sum = addNumbers(5,5);

console.log(sum)

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    return length * width;
}

let area = areaOfRectangle(100,100);
console.log(area);


//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    return 2*(length + width);
}

let perimeter = perimeterOfRectangle(5,5);
console.log(perimeter);

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates 

function areaOfCircle(r, r) {
    return Math.PI * r * r
}

let areacircle = areaOfCircle( 10, 10) 
console.log(areacircle)


// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more


function BMI(weight, height) {

    let bmi = weight / (height * height)
     

    if (bmi < 18.5) {
       console.log('Underweight');
    } else if(bmi < 24.9) {
      console.log('Normal Weight');
    } else if(bmi < 29.9) {
      console.log('Overweight') ;
    } else if (bmi > 30) {
      console.log('Obese');
    }

    return bmi;
}


let bmi = BMI(56,171);

console.log( bmi)

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.


function checkSeason(month){
    
    switch (month) {
      case 'march' :
      case 'april' :
      case 'may'   :
      console.log('Spring');
      break;
      case 'june' :
      case 'july' :
      case 'august' :
      console.log('Summmer');
      break;
      case 'september' :
      case 'october' :
      case 'november' :
      console.log('Autumn');
      break;
      case 'december' :
        case 'january' :
          case 'february' :
          console.log('Winter');
          break;
    }

    return month;
}

let month = checkSeason('december');

console.log(month);

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }

    return array;
}

printArray([1,2,3,4]);

//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(year, month, day, hours, minutes, seconds, ms) {
    return new Date(year, month, day, hours, minutes, seconds, ms);
}

console.log(showDateTime(2026, 4, 26, 10, 30, 0, 0));

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

function reverseArray(array) {
    let reversed = '';

    for (let i = array.length - 1; i >= 0; i--) {
        reversed += array[i];
    }

    return reversed;
}

console.log(reverseArray(['a', 'b', 'c', 'd', 'e']).toUpperCase());
//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item


  
function addItem(item) {
  let items = [];

  items.push(item);

  return items;
}

console.log(addItem('Apple'));
console.log(addItem('Orange'));
console.log(addItem('Apple'));


let items = [1,2,3,4];



// Exercise 2: Count Vowels

// Create a function named countVowels that:

// accepts a string
// counts how many vowels are inside the string
// returns the total number of vowels

// function countVowels(word) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let numberOfVowels = 0;

//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i].toLowerCase())) {
//             numberOfVowels++;
//         }
//     }

//     return numberOfVowels;
// }

// console.log(countVowels("hello"));

// Exercise 3: Temperature Converter

// Create a function named celsiusToFahrenheit that:

// accepts a Celsius value
// converts it to Fahrenheit

// Formula:

function celsiusToFahrenheit(celsius) {
    let formula = 9/5 * celsius + 32 
    return formula;
}



console.log(celsiusToFahrenheit(123))


// Exercise 4: Password Checker

// Create a function named checkPassword that:

// accepts a password
// returns "Strong Password" if the password length is 8 or more
// otherwise returns "Weak Password"

// function checkPassword(password) {
//     let passwordLength = password.length;

//     if (passwordLength > 8) {
//        return "Strong Password";
//     } else {
//       return  "Weak Password";
//     }

    
// }

// console.log(checkPassword("sandreemalakiano"))


// Exercise 4: Simple Calculator

// Create a function named calculator that:

// accepts num1, operator, and num2
// supports:
// +
// -
// *
// /
// returns the result

// Example:

// calculator(10, "+", 5);

// Output:

// 15


// function Calculator(num , operator, num2) {
    
//   let result;

//   switch (operator) {
//       case '+' :
//       result =  num + num2
//         break;
//       case '-' :
//        result =  num - num2
//         break;
//       case '*' :
//       result =   num - num2
//         break;
//       case '/' :
//       result =   num / num2
      
//         break;
//     }

//     return result;
// }

// console.log(Calculator(10, "-", 5));

// Exercise 2: Find the Longest Word

// Create a function named findLongestWord that:

// accepts a sentence
// returns the longest word


// function findLongestWord(sentence) {
//     let split = sentence.split(" ")
//     let long = "";

//     for (let i = 0 ; i < split.length; i++) {
//         if (split[i].length > long.length) {
//           long = split[i];
//         }
//     }
//     return long;
// }

// console.log(findLongestWord("si benedict ay bading"))

// Level 3 – Advanced Beginner Functions
// Exercise 1: Array Sum

// Create a function named sumArray that:

// accepts an array of numbers
// returns the total sum of all numbers

// Example:

// sumArray([1, 2, 3, 4]);

// Output:

// 10

// function sumArray(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// }

// console.log(sumArray([1, 2, 3, 4]))


// 5. Find Smallest Number

// Create a function findSmallest that:

// takes an array
// returns the smallest number

// function findSmallest(array) {
//     let small = array[0];

//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < small) {
//         small = array[i];
//       }
//     }
//     return small;
// }   

// console.log(findSmallest([23, 2, 3, 4]))

// Declare a function fullName and it print out your full name.
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.


function fullName(firstName, lastName) {

  return firstName + lastName;
}


console.log(fullName('Sandree' , ' Antang'))

// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(n1,n2) {
  return n1 + n2;
}

console.log(addNumbers(5,5))


// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

let siblings = ['anna', 'mark', 'john'];

function capitalizeArray(arr) {
    let capitalized = [];

    for (let i = 0; i < arr.length; i++) {
        capitalized.push(arr[i].toUpperCase());
    }

    return capitalized;
}

console.log(capitalizeArray(siblings));


// // Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// let item = ['food', 'services']

// function addItem(arr) {
//     let add = []

//     for (let i = 0; i < arr.length; i++) {
//      add.push(arr[i]);
//     }

//     return add;
// }

// console.log(addItem(['tite']))


// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

let item = ['food', 'services']

function removeItem(array){
     let remove =  array.pop();

      return array;
}

console.log(removeItem(item))


//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

let numbers = [1,2,3,4,5,6]

// function sumOfNumbers(number) {
//     let sum = 0;

//     for (let i = 0; i < number.length; i ++) {
//       sum += number[i] ;
//     }

//     return sum;

// }

// console.log(sumOfNumbers(numbers))

//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(number) {
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
      if (number[i] % 2 !== 0) {
        sum += number[i] ;
      }
    }
    
    return sum;
}

console.log(sumOfOdds(numbers))


function sumOfEvens(number) {
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
      if (number[i] % 2 === 0) {
        sum += number[i] ;
      }
    }
    
    return sum;
}

console.log(sumOfEvens(numbers))
