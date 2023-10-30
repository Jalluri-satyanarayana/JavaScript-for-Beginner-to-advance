const ticket =  new Promise(function(resolve, reject){
   const  isBoarded = false;
   if(isBoarded){
      resolve("you are not im the flight");
   }else{
      reject("your flight has been cancelled");
   }
});
ticket 
   .then((data) => {
        console.log("wohoo",data);
    })
    .catch((data) => {
        console.log("oh no",data);
    })
    .finally(() => {
        console.log("I will never be executed");
    })

// Method - I
function getcheese(){
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is the cheese",cheese);
        resolve(cheese);
    },1000);
  });
}

function makedough(cheese){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🍩";
            console.log("here is the dough",dough);
            resolve(dough);
        },2000);
    });
}
function bakepizza(dough){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is the pizza", pizza);
        resolve(pizza);
    },2100);
});
}

 getcheese()
 .then((cheese) => {
     console.log("here is the cheese",cheese);
     return makedough(cheese);
 })
 .then((dough) => {
     console.log("here is the dough",dough);
     return bakepizza(dough);
 })
 .then((pizza) => {
   console.log("here is the pizza",pizza);
 })
 .catch((data) => {
    console.log("error occured", data);
 })
.finally(() => {
    console.log("Process ended...");
 })

// method- II
async function orderpizza(){
    try{
        const cheese = await getcheese();
        console.log("here is the cheese ", cheese);

        const dough = await makedough(cheese);
        console.log("here is the dough ", dough);

        const pizza = await  bakepizza(dough);
        console.log("here is the pizza ",pizza)
    }
    catch(err){
         console.log("error occured",err);
    }
}
orderpizza()