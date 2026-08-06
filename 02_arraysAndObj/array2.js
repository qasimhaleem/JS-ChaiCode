const myHeros = ["salahudeen", "abubak", "umar", "usman", "ali"]
const actor = ["tom", "rock", "calien murphy"]

// myHeros.push(actor)
// console.log(myHeros)
// console.log(myHeros[5][2])

// const newArr = myHeros.concat(actor)
// console.log(newArr)

const all_hero = [...myHeros, ...actor]
// console.log(all_hero)

const another_arr = [1,2,3, [4,5,6,[7,8]]]
const real_arr = another_arr.flat(1)
// console.log(real_arr)

// console.log(Array.isArray("qasim"))
// console.log(Array.from("qasim"))
console.log(Array.from({name: "qasim"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))