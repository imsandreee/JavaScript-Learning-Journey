let firstName = 'Sandree';
let lastName = 'Antang';
let country = 'Philippines';
let city = 'Caloocan';
let age = 15;
let isMarried = false;
let year = '2005';



function test2() {
    let input = prompt('Enter number');

    alert(typeof parseInt(input));
}

function test3() {
    let input = prompt('Enter number');

    alert(parseInt(Math.round(input)));
}

function test4() {
    
    

}


function test5() {
    let base = prompt('Enter base');
    let height = prompt('Enter height');
    let area = 0.5 * base * height;

    alert(`The area of the triangle is` + area);

}


function test6() {
    let a = parseInt(prompt('Enter side a:'));
    let b = parseInt(prompt('Enter side b:'));
    let c = parseInt(prompt('Enter side c:'));
    let triangle = a+b+c

    alert('The perimeter of the triangle is' + triangle) 
}

function test7() {
    let length = parseInt(prompt('Enter Length'));
    let width = parseInt(prompt('Enter Width'));
    let area = length * width;
    let perimeter = 2 * (length + width);

    alert(`The Area of Rectangle is : ${area}, and the Perimeter is ${perimeter}`)
}

function test8() {
    let radius = parseInt(prompt('Enter radius'));
    let areaCircle = 3.14 * radius * radius;
    let circumCircle = 2 * 3.14 * radius;

    alert(`The area of Circle is ${areaCircle} , and The Circumference of a Circle is ${circumCircle}`);
}

function slope() {
    let x = prompt();
    let y = prompt();
    let slope = 2 * x -2;

    alert();
}


function birthyear() {
    const now = new Date()
    let birthyear = prompt('Enter your birth year')
    let currentYear = now.getFullYear();
    let age = currentYear - birthyear ;
    let remainage = 18 - age ;

    age > 18 ? alert(`You are ${age}. You are old enough to drive`) :
    alert(`You are ${age}. You will be allowed to drive after ${remainage}`) 
}


function seconds() {
    const now = new Date();
    let years = parseInt(prompt());
    let seconds = year * 365 * 24 * 60 * 60 * 60;


    alert(seconds);
}