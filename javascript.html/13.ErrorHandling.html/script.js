/* try{
    console.log('before the error');
   // const age = 12;
    console.log(age)
    console.log('after the error');
}catch (err) {
    console.log(err.name);
    console.log(err.message);
} finally {
    console.log('from finally')
}
*/

try {
    const res = prompt('Are you a robot?');
    if(res === 'S') {
        throw new Error('Robot found')
    }
} catch (error) {
    console.log(error.name, error.message);
}
finally {
  
}