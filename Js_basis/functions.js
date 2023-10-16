// function sayMyName(){
//     console.log("K")
//     console.log("I")
//     console.log("R")
//     console.log("A")
//     console.log("N")
// }

// sayMyName()
// sayMyName()
// sayMyName()

// /function addTwoNumbers(no1,no2){
 //   console.log(no1 + no2);
//}
//addTwoNumbers(2,5)

function addTwoNumbers(no1,no2){
    return  no1 + no2

}

const result = addTwoNumbers(3,5)

// console.log("result",result)

// function loginUserMessage(username){
//     if(!username){
//         console.log("Enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());

// ... rest vanxa
// function calculateCartPrice(...num1){
//     return num1

// }

// console.log(calculateCartPrice(2,4,5))

const user={
    username : "kiran",
    price: 400
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)