const myObj = {
    js: "javaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift"
}
// console.log(typeof myObj)
for (const key in myObj) {
    // console.log(`${key} shortcut for ${myObj[key]}`)
    
}

const arr = ['js', 'rb', 'c++']
for (const key in arr) {
    console.log(arr[key])
}
