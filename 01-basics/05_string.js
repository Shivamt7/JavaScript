const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "Value");
// Not recommadate to use this way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hiteshhc')

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("t"))

const newString = gameName.substring(0,4)   // negative values cannot be used in substring
console.log(newString)

const anotherString = gameName.slice(-8,4)  // negative values can be used
console.log(anotherString)

const newStringOne = "     Shivam     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "hhtps://shivam.com/shivam%20mishra"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));
console.log(url.includes('shivam'));

console.log(gameName.split('-'));