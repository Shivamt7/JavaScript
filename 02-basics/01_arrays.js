// ARRAY: 

// INTERVIEW QUESTION: Array copy operation creates shallow copy rather then deep copy.

// SHALLOW COPY: It is the copy whose properties share the same reference point.

// DEEP COPY: It is the copy whose properties does not shares the same reference point.


const myArr = [0, 1, 2, 3, 4, 5]
const myArr1 = [0, 1, 2, 3, 4, 5, true, "shivam"]   // Elements entered in an Array can we of any DataType

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2)


// ARRAY METHODS:

// myArr.push(6) // Push: Allows you to add a data in an Array.
// myArr.push(7)
// myArr.pop(6) // Pop: Pop eliminates the last value of an Array

// myArr.unshift(9)  // unshift: It add a data in the beginning of an Array
// myArr.shift()  // shift: It eliminates the initial value and shifts an remaining value ahead.


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(5))


// const newArr = myArr.join()  // Join: converts all the values in String datatype and also demonstrate as same.

// console.log(myArr);
// console.log(newArr);



// Slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)  // Slice: It slice the Array but Slice does not change the original Array

console.log(myn1)
console.log("B", myArr);


const myn2 = myArr.splice(1,3)  //  Splice: It includes the 3 also in the desired output. VERY IMPORTANT: Splice manipulates the original Array also.
console.log(myn2);
console.log("C",myArr);
