// 1. Debugging a type error

let obj = {};

obj.name; // will not show error

obj.name.age;  // will give a type error

obj?.name?.age; // A way to ignore type error

// 2. Handling Asynchronous call

let btn = document.querySelector('button');

function getUser(){
    fetch(`https://randomuser.me/api/`)
    .then((raw) => raw.json())
    .then((result) => {
        const { name, email, gender, picture } = result.results[0];
        document.querySelector(
            "#parent"
        ).innerHTML += `<div class="card w-60 p-4 rounded-xl bg-zinc-800">
    <div class="w-20 h-20 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
        <img src="${picture.large}" alt="">
    </div>
    <h3 class="font-semibold text-2xl">${name.first}</h3>
    <h5 class="text-sm font-semibold opacity-60">${email}</h5>
    <h3 class="text-sm opacity-40">${gender}</h3>
    <h6 class="mt-5 text-xs font-semibold opacity-80">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime sunt dolor enim recusandae?</h6>
</div>`;
});
}

btn.addEventListener('click',()=>{
    getUser();
})


// 3. Local Storage

let block = document.querySelector('#block');
let unblock = document.querySelector('#unblock');

block.addEventListener('click',()=>{
    localStorage.setItem('block',true);
    showStatus();
})

unblock.addEventListener('click',()=>{
    localStorage.setItem('block',false);
    showStatus();
})

function showStatus(){
    if (localStorage.getItem('block') === 'false' ){
        document.querySelector('#status span').textContent = 'Not Blocked';
    }
    else{
        document.querySelector('#status span').textContent = 'Blocked';
    }

}

showStatus();