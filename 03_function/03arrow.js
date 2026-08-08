const user = {
    username: "qasim",
    price: 888,
    
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "jack"
// user.welcomeMessage()

// console.log(this) // node environment 

// function chai() {
//     const username = "haleem" // this does not work in the function only in the obj
//     console.log(this.username)
// }
// chai() 

const chai = () => {
     const username = "haleem" // this does not work in the function only in the obj
    console.log(this.username)
}

// chai()

// const addTwo = (num1, num2) => {
    // return num1 + num2
// }
    // return // }

const addTwo = (num1, num2) =>  (num1 + num2)

console.log(addTwo(3,6))