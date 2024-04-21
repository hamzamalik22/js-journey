// 1. clicking button & changing content of paragraph

// let para = document.querySelector('.mypara');

// let btn = document.querySelector('button');
// btn.addEventListener('click',()=>{
//     console.log('text changed')
//     para.textContent = 'Download Started...';
// })

// 2. Swap the image sources with button clicking

// let img1 = document.querySelector('.img1');

// let img2 = document.querySelector('.img2');

// console.log('1',img1.src);
// console.log('2',img2.src);

// let btn = document.querySelector('button');
// btn.addEventListener('click',()=>{
//     temp = img1.src;
//     img1.src = img2.src;
//     img2.src = temp;
// })

// console.log(img1.src);
// console.log(img2.src);

// 3.  Validate form using js

// let inps = document.querySelectorAll('input[type="text"]');
// let form = document.querySelector('form');

// form.addEventListener('submit',event =>{
//     event.preventDefault();
//     for(let i=0; i<inps.length; i++){
//         if(inps[i].value.trim() === ''){
//             let myH2 = document.createElement('h2');
//             myH2.textContent = 'Error, some fields are empty';
//             document.querySelector('body').appendChild(myH2);
//             myH2.style.color = 'red';
//             break;
//         }
//     }
// })

// 4. Dynamically add or remove list items

// let ul = document.querySelector('ul');
// let add = document.querySelector('#add');
// let remove = document.querySelector('#remove');
// let inp = document.querySelector('input');
// let newLi;

// add.addEventListener('click',()=>{
//     if(inp.value.trim() === ''){}
//     else{
//         newLi = document.createElement('li');
//         newLi.textContent = inp.value;
//         ul.appendChild(newLi);
//         inp.value = '';
//     }

// })

// remove.addEventListener('click',()=>{
//     ul.removeChild(newLi);
// })

// 5. Timer

// let h3 = document.querySelector('h3');
// let btn = document.querySelector('button');
// let stop = document.querySelector('#stop');

// let timer;
// btn.addEventListener('click',()=>{
//         let i=0;
//         timer = setInterval(()=>{
//             h3.textContent = i;
//             i++;
//         },1000)
// });

// stop.addEventListener('click',()=>{
//     clearInterval(timer);
// })

// 6. Progress Bar

// let prgs = document.querySelector('.progress');
// let download = document.querySelector('.download');
// let h3 = document.querySelector('h3');
// let btn = document.querySelector('button');

// let count = 0;
// btn.addEventListener('click',()=>{
//     let inter = setInterval(()=>{
//         btn.remove()
//         if(count === 100){
//             h3.style.opacity = 100;
//             clearInterval(inter);
//         }
//         count++;
//         prgs.style.width = count+'%';
//     },50)
// })

// 7. Dynamic Searching

// let input = document.querySelector('input');

// var data = [
//   {
//     name: "Kai",
//     src: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "Shen",
//     src: "https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "Tai",
//     src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "Ken",
//     src: "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D",
//   },
//   {
//     name: "Ben",
//     src: "https://images.unsplash.com/photo-1558624232-75ee22af7e67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D",
//   },
// ];

// let person = '';
// data.forEach((item) => {
//   person += `<div class="person">
//         <div class="img">
//             <img src="${item.src}" alt="">
//         </div>
//         <h3>
//             ${item.name}
//         </h3>
//     </div>`;
// })

// document.querySelector(".people").innerHTML = person;

// input.addEventListener('input',()=>{
//     let match = data.filter(e => {
//         return e.name.toLowerCase().startsWith(input.value.toLowerCase());
//     })

//     let newUser = '';
//     match.forEach(item => {
//         newUser += `<div class="person">
//         <div class="img">
//             <img src="${item.src}" alt="">
//         </div>
//         <h3>
//             ${item.name}
//         </h3>
//     </div>`;
//     })

//     document.querySelector(".people").innerHTML = newUser;
// })

// 8. Word Counter

let counter = document.querySelector('#counter');
let txtArea = document.querySelector('textarea');

txtArea.addEventListener('input',()=>{
    counter.textContent = txtArea.value.length;
})