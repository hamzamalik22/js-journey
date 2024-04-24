//  ---------------------- 1. SetTimeout -----------------------

setTimeout(function(){
    console.log('Hamza') // this will print Hamza after 2 seconds - es5
},2000)

setTimeout(()=>{
    console.log('Hamza') // this will print Hamza after 2 seconds - es6
},2000)

//  ---------------------- 2. SetInterval -----------------------

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

//  ---------------------- 3. Fetch api -----------------------

fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(response => console.log(response.results[0].name.first,response.results[0].name.last ))

//  ---------------------- 4. Axios -----------------------

axios.get(`https://randomuser.me/api/`)
.then(response => console.log(response.data.results[0].name.first,response.data.results[0].name.last))

 ---------------------- 5. Promise -----------------------

let theEpic = new Promise(function (resolve, reject) {
  fetch(`https://randomuser.me/api/`)
    .then((raw) => raw.json())
    .then((response) => {
      if (response.results[0].gender === "male") {
        console.log(response.results[0].gender,'💚');
        resolve();
      } else {
        console.log(response.results[0].gender,'❤️');
        reject();
      }
    });
});

console.log("Hello");

theEpic
  .then(() => {
    console.log("green light");
  })
  .catch(() => {
    console.log("red light");
  });

//  ---------------------- 6. Callbacks -----------------------

let getData1 = (url,Callback)=>{
    fetch(url)
    .then(raw => raw.json())
    .then(result => {
        Callback(result)
    })
}

getData1(`https://randomuser.me/api/`, result =>{
    console.log(result.results[0].gender,result.results[0].email, result.results[0].name.first)
} )


//  ----------------- 7. Promise vs Callbacks vs Async Await --------------------

// Callbacks

let getData1 = (url,Callback)=>{
    fetch(url)
    .then(raw => raw.json())
    .then(result => {
        Callback(result)
    })
}

getData1(`https://randomuser.me/api/`, result =>{
    console.log(result.results[0].gender,result.results[0].email, result.results[0].name.first,'1')
} )


// Promise

function getData(url){
    let myData = new Promise(function(resolve,reject){
        fetch(url)
        .then(raw => raw.json())
        .then(result => {
            resolve(result);
        })
        return mydata;
    })
}

getData(`https://randomuser.me/api/`)
.then(function(result){
    console.log(result.results[0].gender,result.results[0].email, result.results[0].name.first,'2')
})

// Async Await

async function getData(url){
    let myData = await fetch(url);
    let result = await myData.json();
    return result;
}

async function caller(){
    let data = await getData(`https://randomuser.me/api/`);
    console.log(data.results[0].gender,data.results[0].email, data.results[0].name.first,'3');
}

caller();
