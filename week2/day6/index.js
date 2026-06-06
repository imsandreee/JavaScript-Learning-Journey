const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// create an empty set

const setofnum = new Set(b)
console.log(setofnum)

for (const loopNum of setofnum) {
    console.log(loopNum)
}

const removeElement = Element => setofnum.delete(Element)

removeElement(4)

console.log(setofnum)

const clearaset = element => setofnum.clear(element)

clearaset()

console.log(setofnum)

// Create a set containing 0 to 10 using loop

const numbers = new Set()
for ( let i = 0; i < 10; i++ ){
   numbers.add(i)
}
console.log(numbers.size)
// Remove an element from a set
numbers.delete(5)
console.log(numbers.size)

// Clear a set

numbers.clear()
console.log(numbers.size)

// Create a set of 5 string elements from array
const companyinPH = ['Jolibee', 'SM', 'McDo', 'DALI', 'Robinsons']
const setcompanyPH = new Set()

for (const company of companyinPH) {
    setcompanyPH.add(company)
}

console.log(setcompanyPH)

setcompanyPH.delete('Jolibee')

console.log(setcompanyPH)





// Create a map of countries and number of characters of a country


const mapCountryNum = new Map ([a, countries])
console.log(mapCountryNum)