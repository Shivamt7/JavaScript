const accountId = 144553
let accountEmail = "shivammishra123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2
// assignment to const variable is not allowed
accountEmail = "mishrashivam@gmail.com"
accountPassword = "67890"
accountCity = "Goa"


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/