// Use forEach to console.log each country in the countries array.
// Use forEach to console.log each name in the names array.
// Use forEach to console.log each number in the numbers array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','Ewan']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((element) => console.log(element))
let sum = 0;
names.forEach((names) => console.log(names))
numbers.forEach((numbers) => sum =+ numbers )

console.log(sum)

// Use map to create a new array by changing each country to uppercase in the countries array.
// Use map to create an array of countries length from countries array.
// Use map to create a new array by changing each number to square in the numbers array
// Use map to change to each name to uppercase in the names array
// Use map to map the products array to its corresponding prices.

const displayCountries = countries.map((countries) => countries.toUpperCase())

console.log(displayCountries)

const numbersOfCountries = countries.map((countries) => countries.length)

console.log(`there are ${numbersOfCountries} countries`)


const square = numbers.map((num) => Math.pow(num, 2))

console.log(square)

const namesInUpperCase = names.map((names) => names.toUpperCase())

console.log(namesInUpperCase)

const displayProducts = products.map((products) => products)

console.log(displayProducts)

// Use filter to filter out countries containing land.
// Use filter to filter out countries having six character.
// Use filter to filter out countries containing six letters and more in the country array.
// Use filter to filter out country start with 'E';
// Use filter to filter out only prices with values.
const countriesContainingLand = countries.filter((countries) => countries.toLowerCase(countries).includes('land'))
const countiesHavingSixCharacters = countries.filter((countries) => countries.length >= 6 )
const countriesStartsE = countries.filter((countries) => countries.slice(0,1).includes('E'))
const prices = products.filter(product => product.price > 0)
console.log(prices)
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// Use reduce to sum all the numbers in the numbers array.
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const summ = numbers.reduce((accumulator, next) => accumulator + next)
console.log(summ)

const concat = countries.reduce((a,b) => a + ', ' + b)
console.log(concat)


const nameisGreaterthan7 = names.some(name => name.length > 7)
console.log(nameisGreaterthan7)

const DoesCountriesIncludesLandInTheirName = countries.every(country => country.includes('land'))
console.log(DoesCountriesIncludesLandInTheirName)

const findCountries = countries.find( country => country.length > 6) 
console.log(findCountries)


const findIndexCountries = countries.findIndex(country => country.length > 6 )

console.log(findIndexCountries)

const findIndexCountries2 =  countries.findIndex( country => country === "Norway")

console.log(findIndexCountries2)


const findIndexCountries3 =  countries.findIndex( country => country === "Russia")

console.log(findIndexCountries3)

const totalPrice = products.filter(item => item.price !== ' ' & item.price !== '')
.map(item => item.price)
.reduce( (total , price) => total + price)

console.log(totalPrice)

const sumPrice = products.reduce( (total,price ) => {return total +  (Number(price.price) || 0)}, 0)
console.log(sumPrice)

const categorizeCountries = function(pattern) {
      countries.filter(pattern => {
        countries.toLowerCase().includes(pattern.toLowerCase())
      })

}

const countryLettersAndNoOfTimes = function(country) {
    country.filter( letter => letter.slice(0,1))
}