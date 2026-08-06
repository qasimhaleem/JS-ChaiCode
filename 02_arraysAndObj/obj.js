const mySymbol = Symbol("key1")
const newSym = Symbol("key3")

const JsUser = {
    name: "qasim",
    "full name": "Muhammad Qasim",
    age: 21,
    [mySymbol]: "myKey2",
    location: "thal hangu",
    email: "mrqasimhaleem@gmail.com",
    lastLoginDay: "18 apr 2023",
    value: newSym,
    contact: 23457765
}
// console.log(JsUser.name)
// console.log(JsUser["full name"])
// // both are usful syntex

// console.log(JsUser[mySymbol])
// console.log(typeof JsUser.value)

// console.log(JsUser)
JsUser["full name"] = "mr qasim haleem"
// Object.freeze(JsUser)
// other editing are allowed
// JsUser.contact = "00000000"
JsUser.greeting = function() {
    console.log("hello i am function")
}
console.log(JsUser.greeting())
JsUser.greetingTwo = function(){
 console.log(`hello students, this is ${this.name}`)
}
console.log(JsUser.greetingTwo())