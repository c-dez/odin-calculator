//variables
const numb1 = [];
const numb2 =[3];
let numb1Str = (numb1.join('').toString());
let numb2str = (numb2.join('').toString());

// let resultado = parseInt(numb1Str) + parseInt(numb2str); 
let resultado =  numb1Str
const display = document.querySelector('#display .display1');

//create buttons for numbers 0 -9 and negative and dot
function createBtn(numButtons,father){
    
   
    for(let i = 0; i<numButtons; i++){
        let btn = document.createElement('button');
        father.appendChild(btn);
        btn.style.width = '33%';
        btn.style.height = '25%';
        btn.classList = `btn${i}`;

}

}
const numbersGrid = document.querySelector('#numbersGrid');
createBtn(12, numbersGrid);


//hacer que botones pasen numeros a primer array

const numButtons = Array.from(numbersGrid.querySelectorAll('button'));

//etiqutar butones
/////

numButtons.forEach((item)=>{

    item.addEventListener('mousedown',()=>passNum(item))
    item.addEventListener('mouseup', ()=>(display.textContent = numb1.join('').toString()))
    
})


 function passNum(item){
    numb1.push(item.textContent);
    console.log(numb1)
 } 
 
 //number labels
numButtons[0].textContent = '7';
numButtons[1].textContent = '8';
numButtons[2].textContent = '9';
numButtons[3].textContent = '4';
numButtons[4].textContent = '5';
numButtons[5].textContent = '6';
numButtons[6].textContent = '1';
numButtons[7].textContent = '2';
numButtons[8].textContent = '3';
numButtons[9].textContent = 'Neg';
numButtons[10].textContent = '0';
numButtons[11].textContent = '.';

//display

//test sum fun
function sumOperands(){
    console.log((parseInt(display.textContent))+1)
}