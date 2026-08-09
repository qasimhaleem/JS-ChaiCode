// for loop
// const array = [2,4,5]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element)
    
// }

for (let i = 0; i < 10; i++) {
    // console.log(`outer loop ${i}`)
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`)
        // console.log(`${i} x ${j} = ${i*j}`)
    }
    
}
const myArray = ["salah", 'quid', 'abdul']
// console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)    
}



// break and continue

// for (let i = 0; i <= 20; i++) {
//     if(i == 5) {
//         console.log(`5 detected`)
//         break
//     }
//     console.log(`vlaue of i is ${i}`)  
// }


for (let i = 0; i <= 20; i++) {
    if(i == 5) {
        console.log(`5 detected`)
        continue
    }
    console.log(`vlaue of i is ${i}`)  
}