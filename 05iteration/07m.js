const myNum = [1,2,4,5,6,7,8,9]
// const newNum = myNum.map((num) => num+10)

const newNum = myNum
                .map((num)=> num*10)
                .map((num)=> num + 1)
                .filter((num) => num>30)
console.log(newNum)



