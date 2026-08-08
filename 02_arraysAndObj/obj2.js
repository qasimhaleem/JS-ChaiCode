// const channelUser = new Object() // singleton object same as the other one
// console.log(channelUser)

const websiteUser = {
    username: {
        fullname: {
            firstname: "qasim",
            lastname:"haleem"
        }
    }
}
// console.log(websiteUser.username.fullname.lastname)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {2: 'c', 4: 'd'}
const obj3 = {5: 'e', 6: 'f'}

// const resultedObj = Object.assign({}, obj1, obj2, obj3)

const resultedObj = {...obj1, ...obj2}
// console.log(resultedObj)


const arrayObj = [
    {
        id: 1,
        email: "qasim@gmailc.om"
    },
    {
        id: 1,
        email: "qasim@gmailc.om"
    },
    {
        id: 1,
        email: "qasim@gmailc.om"
    },
    {
        id: 1,
        email: "qasim@gmailc.om"
    },
    {
        id: 1,
        email: "qm@gmailc.om"
    }
]

// console.log(arrayObj[4].email)

const appData = {
    id:1,
    email: "meqasim@gmail.com",
    isLoggedIn: false

}

// console.log(appData)
const keysOfObj = Object.keys(appData)  // extract all the keys from obj and put that in the variable in the form of array
// console.log(keysOfObj) 
// console.log(Object.values(appData)) // exract all the values from the obj 
// console.log(appData.hasOwnProperty('isLoggedIn')) // to check weather the obj has that property



const course = {
    courseName: "js chaicode",
    coursePrice: "678",
    courseInstr: "hitesh",
}
// console.log(course.courseInstr)

const {courseInstr: instructor} = course
console.log(instructor)
console.log(courseInstr) // did not work because we did no extract that



//========================  API ===========================

{
    "name": "qasim",
    "courseName": "js by chai code",
    "price": "free"
}

