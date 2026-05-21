function test1() {
    let age = prompt('Enter your age:');

    if (age > 18) {
        alert(`You are old enough to drive.`)
    } else {
        alert(`You are left with ${18 - age} years to drive.`)
    }

}

function test2() {
    let myAge = 21;
    let yourAge = parseInt(prompt('Enter your age:'));

    if (yourAge > myAge) {
        alert(`You are ${yourAge - myAge} years older than me.`);
    } 
}

function test3() {

    let a = 4;
    let b = 3;

    (a > b) ? alert(`${a} is greater than ${b}`) : alert (`${a} is less than ${b}`)
}

function test4() {

    let input = prompt('Enter a number : ')

    if ((input % 2) == 0)   {
        alert(` ${input} is an even number`)
    } else {
        alert(` ${input} is an odd number`)
    }
}

function test5() {

    let score = prompt(`Enter your score: `);

    if(score > 100) {
        alert('invald input')
    }

    if (score > 80 ) {
        alert('A')
    } else if (score > 70) {
        alert('B')
    } else if (score > 60) {
        alert('C')
    } else if (score > 50) {
        alert('D') 
    } else  {
        alert('F')
    }  
}   

function test6() {

    let month = prompt('Enter months: '); 
    let lowerCase = month.toLowerCase;

    switch (month) {
        case 'september':
        case 'october' :
        case 'november' : 
        alert('The season is Autumn');

        break;
        case 'cecember' : 
        case 'january' :
        case 'february' : 
        alert('The season is Winder');
        break;
        case 'march' :
        case 'april' :
        case 'may' :
        alert('The season is Spring');
        break;
        case 'june' :
        case 'july' :
        case 'august' : 
        alert('The season is Summer');
        break;
        default : alert('Enter valid month')
    }
}

function test7() {
    let input = (prompt('Enter days of a week. a day is weekend day or a working day? '));
    let lowerCase = input.toLowerCase();

    switch (lowerCase) {
        case 'saturday' :
        case 'sunday' :
        alert(` ${input} is a weekend.`)
        break;
        case 'monday' :
        case 'tuesday' :
        case 'wednesday' :
        case 'thursday' : 
        case 'friday' :
        alert(` ${input} is a working day.`)
        break;
        default : alert(`invalid day input`)
    }   

}

function test8() {
    let input = prompt('Enter a month: ');
    let leapyear = prompt('Is it leap year? yes or no.')
    let lowerCase = input.toLowerCase();

    let days;

    switch (lowerCase) {
            case 'january' : 
            case 'march' : 
            case 'may' : 
            case 'july' : 
            case 'august' : 
            case 'october' : 
            case 'december' : 
            days = 31;
            break;
            case 'september' : 
            case 'april' : 
            case 'june' : 
            case 'november' : 
            days = 30;
            break;
            case 'february' : 
            days = (leapyear == 'yes') ? 29 : 28;
            break;
            default : alert("Enter Valid Date");
    }

    
    
}

function test9() {
    let username = prompt('Enter your username: ').trim().toLowerCase();
    let password = prompt('Enter your password: ');

    if (username == 'admin' && password == '1234') {
        alert('Login successful!')
    } else {
        alert('Invalid username or password')
    }
}
