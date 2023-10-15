// Primitive

//7 types: String,Number, BOolean , null, undefined, Symbol,BigInt

// Reference / Non-Primitive

//Array, Objects, Functions  

// If you need to define the type of the variable then it is called dynamic tyoed language

const score = 55
const scoreValue = 100.3

const isLoggedIn = true
const outSideTemp = null
let userEmail ;//undefined
const id  = Symbol('123')
const anotherId = Symbol('123')

const bigNo = 13654n
console.log(typeof bigNo)
console.log(id === anotherId)

const arr = ["orange","mango","apple"]
let myObj = {
    name: "kiran",
    age:22
}

const myFunction =function (){
    console.log("hello world");
}

console.log(typeof arr);


//Stack(primitive) and Heap Memory(non-primitve)
let myName = "kiranManandhar"
let anotherName = "helloname"
console.log(anotherName)
console.log(myName)

let user = {
    email:"kiranmdhr9@gmail.com",
    user:"username"
}

let userTwo = user

userTwo.email = "user@gmail.com"
console.log(user.email)
console.log(userTwo.email)