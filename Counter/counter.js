let counter = 0;
const disp_value = document.querySelector('.counter-value')
console.log(disp_value);


const btn_increase = document.querySelector('.inc')
console.log(btn_increase)
btn_increase.addEventListener('click',()=>{
    console.log(btn_increase)
    counter++
    console.log(counter)
    disp_value.innerHTML = counter;

})


const btn_decrease = document.querySelector('.dec')
console.log(btn_decrease)
btn_decrease.addEventListener('click',()=>{
    console.log(btn_decrease)
    counter--
    console.log(counter)
    disp_value.innerHTML = counter;

})

const btn_reset = document.querySelector('.res')
console.log(btn_reset)
btn_reset.addEventListener('click',()=>{
    console.log(btn_reset)
    counter = 0
    console.log(counter)
    disp_value.innerHTML = counter;

})