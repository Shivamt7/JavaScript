const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);


// const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes);


const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

//Note: Spread is denoted as ...


const another_array = [1, 2, 3, 4, 5, [6, 7, 8], 9, [10, [11, 12]]]

// const real_another_array = another_array.flat(2)
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("shivam"));
console.log(Array.from("shivam"));
console.log(Array.from({name: "Shivam"})); //  Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));