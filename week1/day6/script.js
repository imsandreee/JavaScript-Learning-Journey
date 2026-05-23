function test1() {


let emptyArray = [];




}

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

console.log(webTechs.length)
console.log(`${webTechs[0]} , ${webTechs[3]} , ${webTechs[6]}`)

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
  
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.splice(0,1,2));