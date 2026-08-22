const randomNumber = function () {
    let hax = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hax[Math.floor(Math.random() * 16)]
    }
    return color
}
console.log(randomNumber())
let inter;
const changeColor = function() {
    let bg = document.body.style.backgroundColor = randomNumber()
}
document.querySelector('#start').addEventListener('click', () => {
    inter = setInterval(changeColor , 1000)
    console.log('changing of color start')
})
document.querySelector('#stop').addEventListener('click', () => {
 clearInterval(inter)
 console.log('stopped')
})
