const promiseOne=new Promise(function(resolve,reject){
    //do async task
    //DB calls
    setTimeout(function(){
        console.log('async task done');
        resolve()
    },1000)
})
promiseOne.then(function(){
console.log("promise")
}) 
// .then() is related to resolve

new Promise(function(resolve,reject){
    //do async task
    //DB calls
    setTimeout(function(){
        console.log('async task done');
        resolve()
    },1000)
}).then(function(){
    console.log("promise");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"venus", email:"email@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"venus", email:"email@example.com"})  // this will not execute because error =true
        }
        else{
          reject("error");
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
console.log(username);
})
.catch(function(error){  // catch used for error
    console.log(error);
}).finally(function(){
    console.log("promise is resolved or rejected")
})

////////**************Async await****************8 */
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"js", email:"email@example.com"})  // this will not execute because error =true
        }
        else{
            reject('error js')
        }
    },1000)
})
async function consumePromisefive(){
   try {
    const response=await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error)
   }
}
consumePromisefive();


async function getAllUsers(){
    try {
      const response=await fetch('https://api.github.com/users/venus515')  
     const data=await response.json();
     console.log(data);

    } catch (error) {
        console.log("error");
    }
}
getAllUsers();

fetch('https://api.github.com/users/venus515').then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})