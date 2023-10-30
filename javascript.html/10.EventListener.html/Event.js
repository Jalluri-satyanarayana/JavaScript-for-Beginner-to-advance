// Event Handleres
function myFunction(){
    console.log('I was clicked');
}

const mouseOver = () => {
    console.log('mouse over');
}
const keyPressEvent = () => {
    console.log('key was pressed')
}

const keyUpEvent = () => {
    console.log('key up was pressed')
}

const keyDownEvent = () => {
    console.log('key down was pressed')
}

// Event Listeners
const box1 = document.getElementById('box-1');
box1.addEventListener('mousemove', (e) => {
    console.log('click object',e.clientX,e.clientY);
})
box1.addEventListener('click',() => {
    console.log('click by event 2');
})


const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keypress',(e) => {
   console.log('key',e.key);
}) 

nameInput.addEventListener('focus', (e) => {
    console.log('key', e);
})

const container = document.getElementById('container');
container.addEventListener('click',(e) => {
    console.log('clicked on container');
}, true)