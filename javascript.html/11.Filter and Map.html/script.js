// Filter
let students = [
    {id:"01",name:'A',sports:'cricket'},
    {id:"02",name:'B',sports:'basketball'},
    {id:"03",name:'C',sports:'volleyball'},
    {id:"04",name:'D',sports:'kabaddi'},
    {id:"05",name:'E',sports:'football'},
]

const newArray = students.filter((curValue) => {
     if(curValue.id%2==0) return true;
     else return false;
})
console.log(newArray);

// Map
const names = students.map((curValue) => {
    return curValue.name;
})
console.log(names);


const name = students.map((curValue) => {
    return `<li>${curValue.name}</li>`;
})
console.log(name);

const div = document.getElementById('container');
div.innerHTML = `<ul>${name.join('')}</ul>`;