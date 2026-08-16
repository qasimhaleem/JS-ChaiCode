// const myCoding = ['cpp', 'java', 'python']

// const value = myCoding.forEach((item) => {
//     return item
// })
// console.log(value)

// the above example is not returnign any value to other use

const num = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNum = num.filter((num) => num > 5)
// console.log(newNum)

const newNum = num.filter((num) => {
       return num > 5 
})
console.log(newNum)

// return is must in the {} scop

