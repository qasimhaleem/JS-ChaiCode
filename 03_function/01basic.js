function sayMyName() {
    console.log("qasim")
}

// sayMyName // this is the refrence of the function and below all the calling
// sayMyName()
// sayMyName()

function addTwoNumber(a, b) { // a b is the parameter
    // let result = a+b
    // return result
    return a + b
    // after executing return statement below of that would be ignored

}
// console.log(addTwoNumber(4,"4"))// 4, "4" is the arguments of the funcion

const result = addTwoNumber(5,1)
// console.log(addTwoNumber(5,1))


function loginUserMessage(username = 'qasim') {
    if(!username) {
        // console.log("Pleas enter name")
        return
    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("haleem"))


function calculatPrice(...num) { // we use rest opertor when we don't know the overall arguments of the function
    return num
}
// console.log(calculatPriclatPrice(3,6,2,7,1)) 


const user = {
    username: "qasim",
    age: 21
}
function handleObject(anyObject) {
    console.log(`${anyObject.username} is above 20 because his age ${anyObject.age}`)
}

// handleObject({username: "haleem",
//     age: 59
// })
// using by default object without passing the refrence of other one
// handleObject(user) // passing whole object to the function

// ====        array passing to fun

const myArray = [200, 500, 300]

function getValueOfArray(getArray) {
    return getArray[2]
} 
console.log(getValueOfArray(myArray))