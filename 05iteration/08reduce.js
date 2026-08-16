const myNum = [1, 2, 3, 4]

const myTotal = myNum.reduce((acc, currval) => {
    // console.log(`acc: ${acc} and carrvl ${currval}`)
    return acc + currval
}, 0 )
// console.log(myTotal)

const shoppintCart = [
    {
        itemName: "js course",
        price: 1000
    },
    {
        itemName: "app course",
        price: 3000
    },
    {
        itemName: "web course",
        price: 600
    },
    {
        itemName: "oop course",
        price: 1100
    }
]

const priceToPay = shoppintCart.reduce((acc, item)=> {
    return acc + item.price
}, 0)
console.log(priceToPay)