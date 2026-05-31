// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties
//  and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
//  Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: "Sandree",
    lastName: "Antang",
    incomes: [{amount: 1000, description: 'buy n sell'}, 
                {amount: 2000, description: 'another buy n sell'}] , 
    expenses: [{amount: 350, description: 'wifi'}, 
                {amount: 400, description: 'change oil'}],

    totalIncome: function() {
        let total = 0;
        for (const income of this.incomes) {
            total += income.amount;
        }
        return total;
    } ,

    totalExpense: function() {
        let total = 0
        for (const expense of this.expenses) {
            total += expense.amount;
        }
        return total;
    },

    addIncome: function(amount,desciption) {
        this.incomes.push({amount: amount,description: desciption})
    } ,

    addExpense: function(amount,description )  {
        this.expenses.push({amount: amount,description: description})
    },

    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    },

    accountInfo: function() {
        return `Fullname : ${this.firstName} ${this.lastName} \nTotal Income : ${this.totalIncome()} \nTotal Expenses : ${this.totalExpense()} \nTotal Balance : ${this.accountBalance()} `
    }
}

personAccount.addExpense(500, 'droga');
personAccount.addIncome(600, 'illegal')

console.log(personAccount.accountInfo())

