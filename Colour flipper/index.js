const color = [ 'Tomato', 'Orange', 'Violet', 'green'];
let counter = 0;

const text = document.getElementById('text');
const button = document.getElementById('button');

button.addEventListener('click', ()=>{
    text.style.backgroundColor = color[counter];
    counter++;
    counter = counter % 4;
});
