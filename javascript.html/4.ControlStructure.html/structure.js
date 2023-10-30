// if-else conditional statement
const age = 20;

if(age >= 18){
    console.log('you  are eligible for vote'); 
}
else{
    console.log('you are not eligible for vote');  
}
// output : you are eligible for vote

// if-else-if conditional statement

const marks = 72;
if(marks == 100 || marks >= 90){
    console.log('Grade: A')
}
else if(marks == 89 || marks >= 70){
    console.log('Grade: B')
}
else if(marks == 69 || marks >= 60){
    console.log('Grade: C')
}
else if(marks == 59 || marks >= 50){
    console.log('Grade: D')
}
else if(marks == 49 || marks >= 40){
    console.log('Grade: D')
}
else {
    console.log(' you are failed')
}

// output : Grade B

// nested if statement
const Age = 62;

if(Age >= 18){
    console.log('you  are eligible for vote');

    if(Age > 60) {
        console.log('you can vote again');
    }
}
else{
    console.log('you are not eligible for vote');  
}
// output : you  are eligible for vote 
// output : you can vote again

// Ternary operator
const Grade = 30;
const result = Grade >= 40 ? "Passed" : "Failed";
console.log(result);
// output : passed

// Switch case()
grade = 'B';
switch(grade){
    case 'A':
        console.log("Extraordinary");
        break;
    case 'B':
        console.log("Excellent");
        break;
    case 'C':
        console.log("Good");
        break;
    case 'D':
        console.log("Better");
    case 'E':
        console.log('Improve Your Self');
    default:
        console.log('You Are Fail');
}
// Output: Excellent