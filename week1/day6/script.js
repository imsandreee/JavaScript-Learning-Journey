
function test1() {


let emptyArray = [];




}



let mixedDataTypes = ['String', 0 , 0.1, true, [1,2,3]];

console.log(mixedDataTypes.length)



const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' ,'Amazon'];


//Filter out companies which have more than one 'o' without the filter method
const filter = []


  for (let i = 0; i < itCompanies.length; + i++) {
      const company = itCompanies[i];


    if (company.split('o').length -1 <= 1) {
        filter.push(company);
    }
  }

  console.log(filter);
  

//Slice out the first 3 companies from the array

console.log(itCompanies.slice(itCompanies.indexOf('Facebook'),itCompanies.indexOf('Apple')));
//Slice out the last 3 companies from the array

console.log(itCompanies.slice(itCompanies.indexOf('IBM'),itCompanies.indexOf('Amazon')+ 1));

//Slice out the middle IT company or companies from the array

console.log(itCompanies.slice(3,4));

//Remove the first IT company from the array

itCompanies.shift()
console.log(itCompanies);

//Remove the middle IT company or companies from the array

//Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies);
//Remove all IT companies
itCompanies.splice(itCompanies)
console.log(itCompanies)

//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text)


let texttoarray = text.split(' ');
console.log(texttoarray);
console.log(texttoarray.length);

//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
//add Sugar at the end of you shopping cart if it has not been already added
//remove 'Honey' if you are allergic to honey
//modify Tea to 'Green Tea'

shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(4,5);
shoppingCart.splice(shoppingCart.indexOf('Tea'),1,'Green Tea');
console.log(shoppingCart);

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let index = webTechs.indexOf('Sass')

if (index !== -1) {
  console.log( 'Sass is a CSS preprocess')
} else {
  webTechs.push('Sass')
}

console.log(webTechs)

//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

//The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
//Find the median age(one middle item or two middle items divided by two)
//Find the average age(all items divided by number of items)
//Find the range of the ages(max minus min)
//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

ages.sort();
console.log(ages)

// numeric sort
ages.sort();
let middle1 = ages.length / 2 - 1;
let middle2 = ages.length / 2;
let median = (ages[middle1] + ages[middle2]) / 2;
console.log(`Median: ${median}`)

let n = ages.length
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += ages[i];
}

let mean = sum / n;
console.log(`Mean: ${mean}`)

let range = ages[ages.length -1 ] -ages[0] ;

console.log(range)


