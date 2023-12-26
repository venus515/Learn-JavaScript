let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
 heroPower.hitesh()
 myHeros.hitesh()

 Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
//  myHeros.heyHitesh()
// heroPower.heyHitesh()

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
 
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()


///prototype inheritance

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

