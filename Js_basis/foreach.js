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