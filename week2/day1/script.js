const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']


//Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 0 ; i < 10 + 1 ; i++) {
//     console.log(i)
// }

// let i = 0;

// while (i < 10 + 1) { 
//     console.log(i)
//     i++
// }

// do {
//     console.log(i)
//     i++
// } while (i < 10 )

//Iterate 10 to 0 using for loop, do the same using while and do while loop


// for (let i = 10 ; i > 0 ; i--) {
//     console.log(i)
// }

// let i = 10;

// while (i > 0) {
//     console.log(i)
//     i-- 
// }

// do {
//     console.log(i);
//     i-- 
// } while (i > 0)


//Iterate 0 to n using for loop

// for (let i = 0; i < n; i++) {
//     console.log(i);
// }

// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######


// let pattern = ""
// for (let i = 0; i < 7 ; i++) {
//     pattern += "#"
//     console.log(pattern);
// }

// for (let i = 0; i < 11; i++) {
//     console.log(`${i} x ${i} = ${i * i} `);
// }

// for (let i = 0; i < 11; i++) {
//     console.log(`${i} ${i**2} ${i**3} `);
// }

let sum = 0;

for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(sum); // Output: 5050

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
  sumEven += i;


  }


}

      console.log(`The sum of all evens from 0 to 100 is${sumEven}`);


for (let i = 1; i <= 100; i += 2) {
  sumOdd += i;

}
    console.log(`The sum of all odds from 0 to 100 is${sumOdd}`);


let sumofall = sumEven + sumOdd; 

console.log(sumofall)