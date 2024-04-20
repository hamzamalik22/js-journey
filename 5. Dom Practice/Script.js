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



