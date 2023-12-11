const accountId=144553
let accountEmail="venusgarg2gmail.com"
var accountPasssword="12345"
accountCity="Jaipur"
let accountState
// accountId=2;  it will show error becoz it is const so we cant change its value
accountEmail="venus.ic@gmai.com"
accountPasssword="234156"
accountCity="bangalore"

/*dont use var 
because of issue in block scope and function scope
 */
console.log(accountId);
console.table([accountId,accountEmail,accountPasssword,accountCity,accountState]  )