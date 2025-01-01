
function add(a, b) {
    let c = a + b;
    console.log(c);
}
add(5, 8);
add(9, 12);

// add function to print greeting message

function greeting(n) {
    console.log(`Hello ${n}`);
}
greeting('John');

// subtraction function to subtract two numbers and print the result

function subtract() {
    a = 10;
    b = 20;
    c = b - a;
    console.log(c);
}
subtract();

//----------------------------------------------

function add(a, b) {
    let c = a + b;
    console.log(c);
}
add(5);

function add(a, b = 5) {
    let c = a + b;
    console.log(c);
}
add(5);
add(5, 8);



function multiply(a, b) {
    return a * b;
}
let y = multiply(5, 3);
console.log(y);

//----------------------------------------------
//write a function that returns number of characters in a string


// function fun(x){
//     return x.length;
// }

// let res = fun('prasad');
// console.log(res);

// console.log(fun);
// console.log(fun()); // calling a function without passing arguments




//----------------------------------------------
// let z = funtion () // try not entering enter //anonoyms function
// {
//     console.log("Hello world");
// }
// console.log(z);


//----------------------------------------------
// let puppy = function(n){
//     console.log(`I am a puppy ${n}`);
// }
// puppy("prassad");
// console.log(puppy);


//----------------------------------------------

// let sub2 = function(a, b) {
//     return a - b;
// }
// console.log(sub2(10, 5));

//----------------------------------------------

let sub2 = function (a, b) {
    return b - a;
}
console.log(sub2(10, 5));

let sub3 = (a, b) => b - a;
console.log(sub3(10, 5));


//----------------------------------------------
// write a function that checks whether given number is even or odd of a given string.
// Eg: evenOdd(5) // odd (use ternary operator)

function evenOdd(n) {
    return n % 2 == 0 ? 'Even' : 'Odd';
}
evenOdd(5);
console.log(evenOdd(5));

//----------------------------------------------------------

// function for square of a number

// function num(){
// 	let num = 4;
// 	let c = (4**2);
// 	console.log(c);
// }
// num();


//-------------------------------------------------------
function add3(x, y){
    return x + y;
  }
  function calculator(a, b, fn){
    let x = fn(a,b);
    console.log(x);
  }
  function mainLogic(fn){
    fn(5,3,add3); //calculator(5,3,add3)
  }
  mainLogic(calculator);
  