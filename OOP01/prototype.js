let myHeros = ['salahudin', 'Umar RA']
const data = function() {
    console.log('hello')
}
let heroPower = {
    salahudin: "quds",
    umarRa: "22",
    getUmarPower: function() {
        console.log(`umar Ra power is ${this.umarRa}`)
    }
}


Object.prototype.qasim = function() {
    console.log(`qasim is present in all object`)
}


Function.prototype.sayHello = function() {
    console.log(`hello qasim`)
}
// heroPower.qasim()
// myHeros.sayHello()
// data.sayHello()



const user = {
    name: 'book'
}
const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    make: 'js assignement',
    fullTime: true,
    __proto__: teacher
}

//modern approach

Object.setPrototypeOf(teachingSupport, teacher)


let Usernamae = "codewithqasim     "

String.prototype.truelegth = function() {
    console.log(`True length is ${this.trim().length}`)
}

Usernamae.truelegth()

"   hello".truelegth()