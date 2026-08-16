// for of

const arr = [1, 3, 4]

for (const element of arr) {
    if (element == 3) {
        // console.log(`3 detected`)
        break
    }
    // console.log(element)    
}

const greeting = "hello world"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`)
}

const map = new Map() // not iteratable
map.set("a", 1)
map.set("b", 2)
map.set("c", 3)
map.set("d", 4)
map.set("c", 3)
// console.log(map)

for (const [key, value] of map) {
    console.log(key, '->', value )
}

const myObj = {
    'game': 'taken2',
    'game1': 'taekwando'
}
for (const element of myObj) {
    // console.log(element)
    
}