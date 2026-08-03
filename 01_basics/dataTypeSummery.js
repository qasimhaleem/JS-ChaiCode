// premitive datatypes
// 7 types: string, Number, Boolean, null, undefined, symbol, BigInt
//gives us copy of the actual value


// Refernce (non premitive datatype)
// Array, Objects, Function
// give us the refrence of the actual value

let age = 20;
// console.log(typeof (age))
age = "qasim"
// console.log(typeof (age))

// js is dynamiically typed languge means that it has the ability ot assign datatype at run time

let str = "123qasim"
let num  = Number(str)
let type = typeof(num)// will be number because NaN is belong to the Number datatype
// console.log(num)
// console.log(type)


// ++++++++++++++++++++++++++++++++++

// stack (premitive), and heap(non Premitive)

let myXName = "MrQasimHaleem"