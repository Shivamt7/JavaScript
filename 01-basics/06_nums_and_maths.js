const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);


const score1 = Number(200)
console.log(score1)


console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(2));

const otherNumber = 123.866

console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-In'));


// ++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());  // Math.random will always give values between 0 and 1
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);