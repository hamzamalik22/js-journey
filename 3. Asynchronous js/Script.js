//  ---------------------- 1. SetTimeout -----------------------

setTimeout(function(){
    console.log('Hamza') // this will print Hamza after 2 seconds - es5
},2000)

setTimeout(()=>{
    console.log('Hamza') // this will print Hamza after 2 seconds - es6
},2000)


//  ---------------------- 1. SetInterval -----------------------

setInterval(()=>{
    console.log('Hamza Malik') // this will continuously print Hamza after 2 seconds (loop) 
},2000)

let count = 0;
let stop = setInterval(()=>{
    count++;
    console.log(count) // this will continuously print count after 2 seconds (loop)
    if (count === 6){
        clearInterval(stop); // this will stop interval's loop when condition verified..
    }
},2000)

