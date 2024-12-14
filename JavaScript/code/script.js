// Example for single line comment

/* This is a
multi line comment */

console.log("Welcome JS")

function fun() {
    if (true){
        var x = 25; x = 9;
        var x = 90; // we can re-declare
        x = 35; // and we can re-assign
    }

    console.log(x);
}

fun();

function fun2(){
    if(true){
        let x = 25;
        // let x = 90; // we cannot re-declare
        x = 25; // but we can still re-assign
    }
    console.log(x)
}
fun2();

function fun3(){
    if(true){
        const x = 25;
        // let x = 90; // we cannot re-declare
        // x = 25; // we can not re-assign
    }
    console.log(x)
}
fun3();




/* 

comments,
variables,
datatype,
operators

*/