/* Array creation */
let x = [1,2,3,4,5];
console.log(x);
/* output: 1 2 3 4 5 */

/* Accessing elements by indexing */
let y = [1,2,3];
console.log(y[0]);
/* output: 1 */
console.log(y[3]);
/* output: undefined */
console.log(y[-1]);
/* output: undefined */

let z = [
    5,6,7,
    {
        'name':'satya' ,
    },
    function hello(){
        console.log("hello world")
    }
];
console.log(z);
let words = z;
words[0] = 1;
console.log(words)
console.log(words.length)
/* output:
0: 1
1: 6
2: 7
3: {name: 'satya'}
4: ƒ hello()
length: 5 
*/

/* 

Array Methods:
indexOf()
includes()
unshift()
shift()
push()
pop()
slice()
sort()
filter()
map()
forEach()
reduce()

*/

var num = [1,2,3,4,5,6,7,8,9];
console.log(num.indexOf(8)); 
// output : 7

console.log(num.includes(5));
// output : true

num.unshift(10);
console.log(num);
// output : [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]

num.shift();
console.log(num)
// output : [1, 2, 3, 4, 5, 6, 7, 8, 9]

num.push(20);
console.log(num);
// output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 20]

num.pop(20);
console.log(num);
// output : [1, 2, 3, 4, 5, 6, 7, 8, 9]

var subArray = num.slice(2,5);
console.log(subArray);
// output : [3, 4, 5]

const nums = [1,10,5,6,8,2,4];
nums.sort();
console.log(nums);
// output : [1, 10, 2, 4, 5, 6, 8]

const ages = [32, 33, 16, 40];
const results = ages.filter(voter);
function voter(age){
   if (age >= 18){ 
     console.log(age);
   }
}

// output : 32 33 40

var label = [1,2,3,4,5];
var newArray = label.map(myfunction);

function myfunction(num){
   console.log(num*10);
}
// output : 10 20 30 40 50

var students = ['satya','harish','krishna'];
students.forEach(myfunction);
function myfunction(item){
    console.log(item);
}
// output : satya harish krishna

var list = [1,2,3,4,5];
var sum = list.reduce(function(accumulator,currentvalue){
    return accumulator + currentvalue;
});
console.log(sum);
// output : 15