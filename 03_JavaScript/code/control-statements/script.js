// let isLogin = false;
// if(isLogin == false){
//     alert("Please login to continue");
// }



// let a = 10;
// if(a%2==0){
//     alert(`${a} is even`);
// } else {
//     alert(`${a} is odd`); //template string
// }



// A person is eligible to vote after 18 years. check whether the person is eligible to vote or not by the age

// let age = 17;
// let age = +prompt("Enter your age");
// if(age>=18){
//     alert("You are elegible to vote");
//     console.log("You are elegible to vote");
// }
// else{
//     alert("You are not elegible to vote");
//     console.log("You are not elegible to vote");
// }


// Write a program to check and print whether the given person lastname is "pandey" or not.

// let fullname = prompt("Enter your full name"); // plus is added when number is required
// if(fullname.endsWith("pandey")){
//     alert("You lastname is pandey");
// }
// else{
//     alert("You lastname is not pandey");
// }


// write a program to check whether the given number is palindrome or not.
// eg. 121, 12321, 1234321, madam, mom, dad, malayalam.

// let word = prompt("Enter a word");
// let reverseWord = word.split('').reverse.join(''); //[m,a,d,a,m] , split - convert string to array, reverse - reverse the array, join - convert array to string
// if(word == reverseWord){
//     alert(`${word} is palindrome`);
//     alert(word + " is palindrome");
// }
// else{
//     alert(`${word} is not palindrome`);
//     alert(word + " is not palindrome"); // recomended to used template string
// }



// write a program to check whethet the given number is positive or negative.
let a1 = 0;
if(a1>0){
    alert(`${a1} is positive`);
}
else if(a1<0){
    alert(`${a1} is negative`);
}
else{
    alert(`${a1} is nether positive nor negative`);
}