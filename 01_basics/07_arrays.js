const arr=[0,1,2,3,4]

// array methods

arr.push(6);
console.log(arr);
arr.pop();
arr.unshift(9) // o/p: [9,0,1,2,3,4];
arr.shift() // o/p:[0,1,2,3,4];

console.log(arr.includes(9));
console.log(arr.indexOf(9));

const newArr=arr.join() //conver array to string

/////***************IMPORTANT
//slice and splice difference ************ */

console.log("original array",arr);
const myarr1=arr.slice(1,3) // does not alter the main array
console.log(myarr1); // o/p: [1,2] (dont include last index here dont include index-3)
console.log("original array",arr); //o/p :[0,1,2,3,4]
const myarr2=arr.splice(1,3) // it alters the main array
console.log(myarr2); //o/p : [1,2,3]
console.log("original array",arr); // o/p:[0,4]