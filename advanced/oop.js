const user={
 username:"venus",
 age:12,
getuserdetails:function(){
   console.log(`username:${this.username}`);
}

}
console.log(user.username);
console.log(user.getuserdetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
 console.log(userOne.constructor);