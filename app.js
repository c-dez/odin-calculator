//testear que display muestre la suma de dos arrays
const numb1 = [1,];
const numb2 =[3];
let numb1Str = (numb1.join('').toString());
let numb2str = (numb2.join('').toString());
let resultado = parseInt(numb1Str) + parseInt(numb2str); 

const display = document.querySelector('#display');
display.textContent = resultado;

