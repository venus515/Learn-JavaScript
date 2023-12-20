 
 
 const mysym= Symbol("key1");
 const jsUser={
    name:"venus",
    "full name":"venus garg",
      age:18,
      location:"jaipur",
      email:"venus@",
      [mysym] : "mykey" // syntax to represent symbol
 }

//  console.log(jsUser.email)
//  console.log(jsUser["email"])
//  console.log(jsUser["full name"])
//  console.log(jsUser[mysym]);
jsUser.email="venusgarg@" // to change the value

// Object.freeze(jsUser) //to freeze the value
// jsUser.email="venus@"
// console.log(jsUser)
jsUser.greeting=function () {
    console.log("hello js user,venus");

}
jsUser.greetingTwo=function () {
    console.log(`hello js user,${this.name}`);

}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());