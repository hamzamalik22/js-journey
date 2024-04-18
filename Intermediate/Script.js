//  ---------------------- 1. This Keyword -----------------------

/*
This keyword behave differently according to different conditions

1. global - window
2. function - window
3. method - object
4. fnc inside a method (es5) - window
5. fnc inside a method (es6) - object
6. constructor fnc - new blank object
7. event listener - the element on which event listener is applied

*/

// console.log(this)  // 1. global : window


// function joke(){
//     console.log(this)  // 2. function : window
// }
// joke()


// var obj = {
//     myJoke : function(){
//         console.log(this);  // 3. method : object
//     },
//     body : "Knock knock!",
//     reacts : 25
// }
// obj.myJoke()


// var obj2 = {
//     getName : function(){
//         function myName(){
//             console.log(this)  // 4. fnc inside a method (es5) - window
//         }
//         myName();
//     }

// }
// obj2.getName()



// var obj3 = {
//     getAge : function(){
//         const myAge = ()=>{
//             console.log(this); // 5. fnc inside a method (es6) - object
//         }
//         myAge();
//     }

// }
// obj3.getAge();


//  ---------------------- 2. Prototypal inheritance -----------------------

// // example 1
// function myAnimal(specie,cuteness_index){
//     this.specie = specie;
//     this.cuteness_index = cuteness_index;
// }

// myAnimal.prototype.findSpecie = function(){
//     console.log(this.specie);
// }

// var animal1 = new myAnimal('Cat',1)
// var animal2 = new myAnimal('Dog',9)
// var animal3 = new myAnimal('Panda',3)

// // example 2

// function makeHuman(name,age,ethnicity){
//     this.name = name;
//     this.age = age;
//     this.ethnicity = ethnicity;
// }

// makeHuman.prototype.giveBio = function(){
//     console.log(this.name , this.ethnicity)
// }

// let human1 = new makeHuman('Hamza',20,'Pakistani')
// let human2 = new makeHuman('Jofra Archer',32,'English')
// let human3 = new makeHuman('Dhruv Rathee',39,'Indian')

//  ---------------------- 3. Closure -----------------------

// closures are function in which you can return a function (here parent value is used)
function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

let newFunc  = counter();

newFunc();
newFunc();
newFunc();

//  ---------------------- 4. Higher Order Function -----------------------

// In which function are provided as parameter

var arr = [1,2,3,4,5,6]

arr.forEach(function(num){
    console.log(num)
})


//  ---------------------- 5. Try Catch -----------------------

function divide(a,b){
    try{
        if(b===0){
            throw Error ("Zero key sath divide nhi kr sktay");
        }
        console.log(a/b);
    }
    catch(err){
        console.log(err);
    }
}

divide(10,3);
divide(10,0);