console.log("My name is Vishal. It's working fine.");

let a = 25.1759;
console.log(a);
console.log(typeof a);
console.log(a.toFixed(2)); // fixed no of decimal digits
console.log(a.toPrecision(3)); //fixed no of degits
// 25.1759 --> 25.176 --> 25.18 --> 25.2

a = 25;
console.log(a.toString(2)); //convert the decimal digit in the nuber system with different base.


// Math method

console.log(Math.max(5, 8, 9, 3));
console.log(Math.min(3, 1, 6, 4, 9));

console.log(Math.sqrt(100));
console.log(Math.cbrt(64));

console.log(Math.ceil(2.4));
console.log(Math.floor(2.4));
console.log(Math.round(3.14));

console.log(Math.random());


// Strings

let str1 = 'raj';
let str2 = "raj";

console.log(typeof str1, typeof str2);

// let quote = "Gandhi said, "Good night."; // error, we can't use " " tw0 times."
let quote = "Gandhi said, 'Good night'.";

// let time = 'The time is 5 o\n' clock'; // I conciously writing 5 o\n', not 5 o\'
let time = 'The Time is 5 o\' clock'; // copy pasted was immediate correct.


let cost = 25, quantity = 4;
console.log(`The total of ${quantity} apples of each worth ${cost} is ${cost * quantity}`);

let s = "prasad";
console.log(s.length);

console.log(s.charAt(1));

console.log(s.indexOf('a'));

console.log(s.lastIndexOf('a'));

console.log(s.toUpperCase());
console.log(s); //original string wont change because in JS, Strings are immutable(unchangeable).

console.log(s.toLowerCase());
console.log(s.startsWith("pa"));
console.log(s.endsWith("ad"));

console.log(s.replace('a', 'k')) //replaces only first occurence
console.log(s.replaceAll('a', 'k')) // replaces all the occurences

let s1 = "JS IS so easy";
console.log(s1.split(' '));
console.log(s.split(''));
console.log(s.split('a'));

console.log(s.slice(2));
console.log(s1.slice(2, 5));


s = "             prasad                    ";
console.log(s.trim());






























