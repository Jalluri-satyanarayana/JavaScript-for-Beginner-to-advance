// normal functions
function sumoftwonumbers(a, b){
    const result = a+b;
    console.log(result);
   }
   const a = 10;
   const b = 20;
   console.log(sumoftwonumbers(a, b));
   
   const c = 16;
   const d = 9;
   console.log(sumoftwonumbers(c, d));
   
   // expression function
   const squares = function(a,b){
       const results = a*a + b*b;
       return results;
   }
   console.log(squares);
   console.log(squares(4,5));
   
   // nested functions
   function squareroot(a, b){
        s1 = square(a);
        s2 = square(b);
   
       function square(num1){
           return num1*num1;
       }
       return s1+s2;
   }
   console.log(squareroot(6,5));
   
   // Arrow  functions
   
   // using arrow function
   const add = (a, b) => a+b;
   console.log(add(5,6));
   // output : 11
   
   // using without arrow function
   const sum = function add(a, b){ return a+b;}
   console.log(sum(5, 6));
   // output : 11
   
   const square = (num) => num*num ;
   console.log(square(5));
   
// callback function
   function greet(name, callback){
       console.log('hai' +' '+ name)
       callback();
   }
   function callme(){
       console.log("Iam calling back function");
   }
   greet('satya',callme);

   function add(a,b){
    return a+b;
  }
// another example for calling back function
   function subtraction(a,b){
      return a-b;
    }

   function opertaions(a,b,callback){
    return callback(a,b);
   }

   let num1 = 10;
   let num2 = 5;

   let sums = opertaions(num1,num2,add)
   console.log("SUM:",sums);
 
   let difference = opertaions(num1,num2,subtraction)
   console.log("Difference",difference);

   /*
     output:
    
      SUM: 15
      Difference 5

    */
   
   // Array callback methods
   
   // every()
   const words = ['kia','karen','king','korean'];
   console.log(words.every(word => word[0] === 'k'));
   // output : true
   console.log(words.every(word => word[words.length-1] === 'g'));
   // output : false
   
   // some()
   const text = ['kia','karen','king','korean'];
   console.log(text.some(letters => letters[text.length-1] === 'g'));
   // output : true

//Hell call back functions
function getcheese(callback){
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is cheese", cheese);
        callback(cheese);
    }, 2000);
}
function makedough(cheese, callback){
    setTimeout(() => {
        const dough = cheese + "🥟"
        console.log("here is the dough", dough);
        callback(dough);
    }, 2100);
}

function pizza(dough,callback){
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is the pizza", pizza);
        callback(pizza);
    }, 2300);
}
getcheese((cheese) => {
    makedough(cheese, (dough) => {
      pizza(dough, (pizza) => {
        console.log("got pizza", pizza);
    });
  });
});