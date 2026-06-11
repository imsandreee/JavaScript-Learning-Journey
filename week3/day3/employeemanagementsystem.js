let employees = [
  { id: 1, name: "John", department: "IT", salary: 30000 },
  { id: 2, name: "Mary", department: "HR", salary: 25000 },
  { id: 3, name: "Alex", department: "IT", salary: 40000 }
];

let nextId = 4;

function addEmployee(name, department, salary) {
    let newEmployees = {
        id: nextId,
        name: name,
        department: department,
        salary: salary
    }

    employees.push(newEmployees)

    nextId++;

    return employees
}


console.log(addEmployee("Sandree", "IT", 15000))


function getEmployees() {
    return employees
}

console.log(getEmployees())

function findEmployeeById(id) {
    employees = employees.find( e => e.id == id)

    return employees;
}

console.log(findEmployeeById(2));

function searchEmployee(keyword) {
    let employee = keyword.toLowerCase()

   let searchEmployeee =  employees.filter( e => {
    let employeeid = String(e.id).toLowerCase()
    let employeename = String(e.name).toLowerCase()
    let employeedepartment = String(e.department).toLowerCase()
    let employeesalary = String(e.salary).toLowerCase()
    return employeeid.includes(employee) || employeename.includes(employee) || employeedepartment.includes(employee) || employeesalary.includes(employee)}
)
    if (searchEmployeee.length === 0) {
      return  'Employee Not Found'
    }
return searchEmployeee;
}

console.log(searchEmployee("h"))


function filterByDepartment(department) {
    let filterdepartment = employees.filter( e => e.department === department)

    return filterdepartment;
}

console.log(filterByDepartment("IT"));

function increaseSalary(percent) {
   employees =  employees.map( e => {
       return { ...e, salary: e.salary * (1 + percent/100)}})

    return employees
}


console.log(increaseSalary(10));


function deleteEmployee(id) {
   employees = employees.filter( e => id !== e.id)

   return employees
}

console.log(deleteEmployee(4))

 let updatedEmployee = { 
    name: "Sandree", 
    department: "IT", 
    salary: 67000 }


function updateEmployee(id, updatedData) {

    employees = employees.map(e =>{
        if (e.id === id) {
           return {...e, ...updatedData}
        }
        return e;
    } )

    return employees;
}


console.log(updateEmployee(2, updatedEmployee))


function getTotalPayroll() {
   let totalSalary =  employees.reduce( (salary, total) => salary + total.salary, 0)

    return totalSalary;
}

console.log(getTotalPayroll())


function getHighestPaidEmployee() {
   let findhighest = employees.reduce( (high,current) => {
        if (current.salary > high.salary) {
            return current;
        } else {
            return high;
        }
    })

    return findhighest;
}

console.log(getHighestPaidEmployee())
