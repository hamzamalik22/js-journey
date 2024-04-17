//  ---------------------- 1. Browser Builtin -----------------------
// // console, alert, prompt

// // Console (.log, .warn, .error)

// console.log("Hamza Malik") // Used to print values in console of browser
// console.warn("Hamza Malik") // Used to print values in console of browser as a warning!
// console.error("Hamza Malik") // Used to print values in console of browser as an error🚫

// // Alert
// alert("Don't move!") // Give a pop up warning on browser when it is refreshed

// // Prompt
// prompt("What is Your name?") // Used to get user input 


//  ---------------------- 2. Variable & Constants -----------------------


// var age = 20;

// var myName = 'Hamza';

// const id = 10101;

// console.log(myName);  // Hamza
// console.log(age);    // 20
// console.log(id);    // 10101

// age = 21; 
// id = 10102; 

// console.log(age) // 21 
// console.log(id) // will throw error as constants are immutable (Can't be changed)
//                 // Uncaught TypeError: Assignment to constant variable.


//  ---------------------- 3. Data Types -----------------------

// // Primitive data types and reference data types

// // primitive
// var age = 20;                // integer
// var name = "Hamza";         // String
// var paid = false;          // boolean
// var cgpa = 3.82;          // float
// var role = undefined;   // not defined yet
// var phone = null;       // null

// // Reference 

// // {} , [] , () datatypes that contain these braces are called reference datatype


//  ---------------------- 4. Conditionals -----------------------

// // if else else if , ternery operator & switch case

// marks = prompt("Enter your marks :")

// if(marks > 75){
//     console.log("Excellent")
// }
// else if(marks < 45){
//     console.log("Very Poor")
// }
// else{
//     console.log("Good but not satisfactory")
// }


//  ---------------------- 5. Loops -----------------------

// // For loop, while loop, for each

// // for loop (syntax)

// // for(start ; end ; change/condition){

// // }

// for(var i=0; i<10 ;i++){
//     console.log(i)
// } 

// // while loop (syntax)

// // start;
// // while(end){

// //     change/condition
// // }

// var i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }


//  ---------------------- 6. Functions -----------------------

// Functions in es5

// 1. Function Statement
function printName(){
    console.log("Hamza")
}

printName()

// 2. Function expression

var abcd = function(){
    
}

// 3. anonymous function

function(){

}


// Functions in es6

// 1. Basic fat Arrow

var a = ()=>{

};

// 2. fat arrow with 1 parameter

var g = (ab)=>{};
g(12);

// 3. Implicit return function
var abcd = ()=>12;