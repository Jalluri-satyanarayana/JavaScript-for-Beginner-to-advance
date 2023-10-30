const mybody = document.body;

console.log(mybody);

box2 = document.getElementById('box-2');

console.log(box2);

const divs = document.getElementsByTagName('div');

console.log(divs);

const p = document.getElementsByTagName('p');

console.log(p);

const boxes = document.getElementsByClassName('container');

console.log(boxes);

const  box = document.getElementsByClassName('random');

console.log(box);

const random = document.querySelector('.container0 .random');

console.log(random);

const box1 = document.getElementById('box-1');
box1.innerHTML = '<h1>Hello</h1> <p>Hello World</p>'
box1.style.backgroundColor = 'red'
box1.innerHTML = "<img src = \'https://rukminim2.flixcart.com/image/850/1000/k8xduvk0/poster/a/8/f/medium-doremon-cartoon-poster-poster-for-kids-room-poster-for-original-imafqu6pegcykxbq.jpeg?q=20\' width=\'50px\' height=\'70px'\'>";

const bs = document.getElementsByClassName('box');

for(let i = 0; i < bs.length; i++){
     bs[i].classList.add('round-border');
} 
box1.classList.remove('round-border');

const newParagraph = document.createElement('p');
newParagraph.innerText = "This is brand new";
newParagraph.classList.add('box');

const container = document.getElementById('container');
container.appendChild(newParagraph);