// INTEVIEW QUESTION
// In how many ways datatypes are categorized.
// kis tarike se data ko memory mai rakha jaata hai aur kis tarah se usse access kiya jaata hai, uss base pr data ka do categorization hai:-
// 1) primitive datatypes
// 2) non primitive datatypes


// Primitive Datatypes

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt.


// const score = 100
// const scoreValue = 100.3        // number

// const isLoggedIn = false       // boolean
// const outsideTemp = null       // Object
// let userEmail;                 // undefined

// const id = Symbol('123')       // symbol
// const anotherId = Symbol('123') // symbol
// console.log(anotherId === id);

// const bigNumber = 654131841631681486n // bigint

// Reference (Non Primitve)
// Array, Objects, Funtions


// const heros = ["shaktiman", "naagraj", "doga"] // object
// let myObj = {
//     name: "shivam",              // object
//     age: 25
// }


// const myFunstion = function () {
//     console.log("hello world");  // function object
// }

// console.log(typeof myFunstion)


// **************************************************************

// Stack (Primitve) , Heap (Non-Primitive)


// STACK Example:

let myYoutubename = "SinuRocks"

let anotherName = myYoutubename
anotherName = "Iamtibba7"

console.log(myYoutubename)
console.log(anotherName)



// HEAP Example:

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

console.log(userTwo)

userOne.email = "shivam@google.com"
userTwo.email = "satyam@google.com"

console.log(userOne)
console.log(userTwo)