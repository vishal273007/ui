// Example for single line comments

/*
This is
Multi-line
Comments
*/

console.log("Welcome JS");

function fun() {
  if (true) {
    var x = 25;
    var x = 9; // we can re-declare
    x = 35; // we can re-assign
  }
  console.log(x);
}
fun();

function fun2() {
    if (true) {
        let x = 25;
        //let x = 90; //Cannot redeclare block-scoped variable.
        x = 90; // We can still reassign the value
    }
    console.log(x); // error, x is defined.
}
fun2();

function fun3() {
    if (true) {
        const x = 25;
        // const x = 90; // Cannot redeclare block-scoped variable 'x'.
        x = 35; // We cannot reassign the value.
    }
    console.log(x); // error, x is not defined
}
fun3();
