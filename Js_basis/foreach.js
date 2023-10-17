const arr = [10,20,30,40,50,60,71,81,45,64]
// arr.forEach( function(item){
//     console.log(item);
// } )

// arr.forEach((item) => {
//     console.log(item);
// })

arr.forEach( (item, index, array) =>{

    // console.log(item,index,array);
})

const MyCoding =[
    {
        languageName:"Javascript",
        lanaguageFileName: "js"
    },
    {
        languageName:"java",
        lanaguageFileName: "java"
    },
    {
        languageName:"html",
        lanaguageFileName: ".html"
    },
]

MyCoding.forEach( (item) => {
     console.log(item.languageName);
})




const nos =[1,2,64,54,98,5,456,1654]

// const newnos = nos.filter( (num)=> {
//     return  num > 64
// }
// )
// console.log(newnos);


const newnos =[]
nos.forEach( (num) => {
    if(num > 64){
        newnos.push(nos)
    }
})
console.log();
