
// this reference to current 
const user = {
    username : "Kiran",
    price : 999,

    WelcomeMessage : function(){
                console.log(`${this.username},Welcome to Website`);
                console.log(this)
    }


}
// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()

//  console.log(this)

//this doesnt work on function

// function hello(){
//     let username = "kiran"
//     console.log(this.username);
// }

// Arrow Function curly braces vayo vane chai return lekhnu parxa arko mah return rakhnu pardaina

// const hello = () =>{
//      let username = "kiran"
//     console.log(this);
//     }
//   hello()


//implictly
  const addTwo =(no1,no2) => no1 + no2
console.log(addTwo(2,5))



// const myArray = [1,4,5,6,9,7]