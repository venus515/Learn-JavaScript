const user={
    username:"venus",
    price: 999,
    welcomepage:function(){
        console.log(`${this.username},welcome`);
        console.log(this); //o/p: { username: 'venus', price: 999, welcomepage: [Function: welcomepage] }
    }

}
user.welcomepage();
user.username="ABC"
user.welcomepage(); // venus will replaced by ABC
console.log(this); // o/p : {}

function one(){
    let username="venus"
   console.log(this.username); // it will show undefined 
}
one()

const chai=()=>{
    let username="venus"
    console.log(this); // {}
    console.log(this.username); // undefined
}
chai()
//  const addtwo=(num1,num2)=>{
// return num1+num2 //explicite return
//  }
//  const addtwo=(num1,num2)=> num1+num2 //implicitly return
const addTwo=(num1,num2)=>({username:"venus"}) //object declare in function
 console.log(addtwo(3,4));





