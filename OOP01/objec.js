function multiply(num) {
    return num*5
}
multiply.power = 2
// function is function but also work as an object
//

console.log(multiply(5))
console.log(multiply.power)
console.log(multiply.prototype)

function createUser(username, score) {
    this.username = username,
    this.score = score
}

createUser.prototype.increament = function() {
    this.score++;
}
createUser.prototype.printMe = function() {
    console.log(`price of book is ${this.score}`)
}

const forty8Law = new createUser("48 laws of power", 180)
const atomicHabit = new createUser('Atomic habit', 200)

atomicHabit.printMe()
atomicHabit.increament()
atomicHabit.printMe()