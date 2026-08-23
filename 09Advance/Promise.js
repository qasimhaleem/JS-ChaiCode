const promise1 = new Promise((resolve, reject) => {
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(() => {
        console.log("Async function called")
        resolve()
    })
})
promise1.then(()=> {
    console.log('promise one excuted')
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async 2 called')
    }, 1000)
}).then(() => {
    console.log("promis 2 excuted")
})


promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async 3')
        resolve({username: 'qasim', pass: 123})
    }, 1000)

})

promiseThree.then((users) => {
    console.log(users)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('fourth promise called')
        let error = false
        if (!error) {
            resolve({book: '48laws of power', price: 300})
        } else {
            reject('EROR: Something went wrong')
        }

    }, 1000)
})
promiseFour.then((book) => {
    console.log(book)
    return book.price
}).then((price) => {
    console.log(price)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('the promise is eather resolve or rejected')
})

const promisFive = new Promise((resolve, reject) => {
 setTimeout(() => {
        console.log('five promise called')
        let error = false
        if (!error) {
            resolve({lang: 'JS', outDate: 1995})
        } else {
            reject('EROR: Something went wrong')
        }

    }, 1000)   
})

async function consumePromiseFive() {
   try { 
    const response = await promisFive
    console.log(response)  
   } catch (error) {
    console.log(error)
   }
}
consumePromiseFive()

// async function getUserQasim() {
//     try {
//         const response = await fetch('https://api.github.com/users/qasimhaleem')
//         const data = await response.json()
//         // console.log(data)
//         console.log(data.name)
//     } catch (error) {
//         console.log('E: ', error)
//     }   
// }
// getUserQasim()



fetch('https://api.github.com/users/qasimhaleem')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data.name)
})
.catch((error) => {console.log('e: ', error)})
