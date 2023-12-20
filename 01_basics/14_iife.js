//immediately invoked function expressions
// global scope ke pollution se problem hoti h kyi baar so usko htane ke liye hmne iska use kra h
(function one(){
    console.log(`venus`);
})();

(function two(name){
    console.log(`${name}`);
})('venus');

( ()=>{
    console.log("name")
}

)();