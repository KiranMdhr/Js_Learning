//Scope {}
// var c = 100

// let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     //  c = 30
//     console.log("Inner",`${a}`)
// }

// console.log(a)

function one(){
    const username ="kiran"
    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website);
    two()
}
one()


if(true){
    const username = "ram"
    if(username === "ram"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

// ++++++++++++++++++ interesting  +++++++++++++++

function addOne(no) {
    return no + 1

}
console.log(addOne(6))

const addTwo = function(no){
    return no + 2
}
addTwo(5)