////     Document selectors

// let a =  document.getElementById('#head1')

// let b = document.getElementsByClassName('.head2')

// let c = document.getElementsByTagName('h3')

// let d = document.querySelector('h4');

////     Manipulating Styles & Classes - style & classList

// let adding = document.createElement("img")

// adding.src = 'https://images.unsplash.com/photo-1712512162392-d523620fbaa2?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

// document.querySelector('body').appendChild(adding);

// adding.classList.add('imgmodi');

// adding.style.border = '5px solid white'


// Creating & Deleting Elements

// create element
let newImage = document.createElement("img")

newImage.src = 'https://images.unsplash.com/photo-1712512162392-d523620fbaa2?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

// Append element

document.querySelector('body').appendChild(newImage);

// remove child element

document.querySelector('body').removeChild(newImage);


// event Handling

let btn = document.querySelector('button');
btn.style.background = 'white';
btn.addEventListener('click',()=>{
    btn.textContent = 'Dowloading started';
});


document.querySelector('body')
.addEventListener('mousemove',(det)=>{
    console.log(det);
});