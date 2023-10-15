const arr = ["orange","apple","pineapple","pomogranate",1,2,3,4,5] 
console.log(arr[0])


const arr2 = new Array(1,23,43,5,34)


//Array Methods

// arr2.push(99)
// arr2.push(0)
//  console.log(arr2)
// arr2.pop(arr2)

// arr2.unshift(23)
// arr2.shift()
// console.log(arr2)

// console.log(arr2.includes(23))

// console.log(arr2.indexOf(3))


// const newArr = arr2.join()
// console.log(newArr)
// console.log(typeof newArr)

//slice , splice


console.log("A", arr2);
const myn1 = arr2.slice(1,3)
console.log(myn1)
console.log("B",arr2);

const myn2 = arr2.splice(1,3)
console.log("C", myn2)
console.log(myn2)
console.log()
