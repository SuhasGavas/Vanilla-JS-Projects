let counter = 0;

const cntr = document.getElementById('cntr');
const btn_incr = document.getElementById('btn_incr');
const btn_decr = document.getElementById('btn_decr');
const btn_reset = document.getElementById('btn_reset');

btn_incr.addEventListener('click',()=>{
    counter++;
    cntr.innerHTML = counter;
})

btn_decr.addEventListener('click',()=>{
    counter--;
    cntr.innerHTML = counter;
})

btn_reset.addEventListener('click',()=>{
    counter = 0;
    cntr.innerHTML = counter;
})