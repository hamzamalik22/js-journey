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

console.log(this)  // 1. global : window


function joke(){
    console.log(this)  // 2. function : window
}
joke()


var obj = {
    myJoke : function(){
        console.log(this);  // 3. method : object
    },
    body : "Knock knock!",
    reacts : 25
}
obj.myJoke()


var obj2 = {
    getName : function(){
        function myName(){
            console.log(this)  // 4. fnc inside a method (es5) - window
        }
        myName();
    }

}
obj2.getName()



var obj3 = {
    getAge : function(){
        const myAge = ()=>{
            console.log(this); // 5. fnc inside a method (es6) - object
        }
        myAge();
    }

}
obj3.getAge();
