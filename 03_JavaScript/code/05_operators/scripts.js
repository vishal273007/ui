// Arithmetic operators:

// let a = 20, b = 10;
// console.log(`The sum of ${a} and ${b} is ${a + b}`);
// console.log(`The difference between ${a} and ${b} is ${a - b}`);
// console.log(`The product of ${a} and ${b} is ${a * b}`);
// console.log(`The remainder of ${a} and ${b} is ${a / b}`);
// console.log(`The modulous of ${a} and ${b} is ${a % b}`);
// console.log(`The power of ${a} to ${b} is ${a ** b}`);


// Relational operators:

// let a = 20, b = 5, c = '20';
// console.log(a > b); //T
// console.log(a < b); //F
// console.log(a >= b); //T
// console.log(a <= b); //F
// console.log(a == c); //T
// console.log(a === c); //F
// console.log(a != c); //F
// console.log(a !== c); //F



// Logical Operators

let a = 20, b = 10;
console.log("logical AND will be true when both statements are true " + ((a > 2) && (b > 3)));
console.log("logical OR will be true when one is statements true true " + ((b > 2) || (b > 30)));
console.log("logical NOT will be true when statements is false " + !(a > 20));



// Assignment or Shorthand operators

// console.log(a = 2);

console.log(a += 2);
console.log(a -= 2);
console.log(a *= 2);
console.log(a /= 2);
console.log(a **= 2); // a =  a pwr 2
console.log(a %= 2);



a = 5;
b = a++; // a=a+1

console.log(a++);
console.log(++a);

c = ++a;
console.log(a, b, c);

a = 20, b = 10;
c = ++a + a++ + --b + b--; //21 + 21 + 9 + 9
console.log(c);


// Ternary Operators  (Most important)

a = 10;
// a = 11;
c = (a % 2 == 0) ? 'Even' : 'Odd';
console.log(c);

console.log('5' + 1); //51
console.log(+'5' + 1); //6



// coelsion operator
a = 5;
var d = 25;
c = d ?? a;
console.log(c);





d = undefined;
a = 10
c = d ?? a;

console.log(c);
















