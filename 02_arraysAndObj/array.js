// array

const arr = [1,2,3,4,5]
// both works if element were same or different
// array may be resized
//deep copy: not pointing to actul refrence
// shallow copy: pointing toword actual refrence

// console.log(arr[4])
// if we have multiple index in one clg then the last index is picked automaticlly
// console.log(arr.length)

// ========================== array methods ============
// push
// arr.push(6)
// arr.push(7)
// arr.pop()
// arr.pop()
// arr.pop()

// shift and unshift
// arr.unshift(9)
// arr.shift()
// it will be worse desicion if there are 100000 records the each and every element index will be changed and that will be time consuming along with load on computer


//splice and slice

const myn1 = ["A", arr]
const myn2 = ["B", arr]

// const newArr = arr.join()
//                            convert to string
// console.log(typeof newArr)

// console.log(myn1)
// console.log(arr.slice(1,3))
// console.log(myn2)
// console.log(arr.splice(1, 3)) 
// console.log(arr)

// console.log(arr.concat(myn1, myn2))
// console.log(arr)
// console.log(arr.slice(1,3))
// console.log(arr)

const result = [20,28,13,15,17,26]
result.sort()
// console.log(result)
let count = 0
result.forEach((item) => 
{
    if(item<19) {
        count++
    }
})
// console.log(count)
result.splice(0,count)
// console.log(result)

