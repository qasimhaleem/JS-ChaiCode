const user = {
    username: 'm.qasim',
    isLoggedIn: true,
    loginCount: 22,

    greeting: function (){
        console.log(`hello how are you mr ${this.username}`)   
    }
}

const obj = user
console.log(obj.greeting())

function User(username, loginCount, isLoggedIn ) { 
    this.username =  username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const ObjOne = new User('qasim', 5, true)
const ObjTwo = new User("bilal", Math.floor(Math.random() * 5 + 1), false )
console.log(ObjOne) 
console.log(ObjTwo) 


