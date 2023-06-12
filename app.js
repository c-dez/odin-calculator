
const display1 = document.querySelector('#display .display1');
const display2 = document.querySelector('#display .display2');
const resultado = document.querySelector('#display .resultado');
const numbersGrid = document.querySelector('#numbersGrid');
const operatorsGrid = document.querySelector('#operatorsGrid');

//create buttons for operands & operators
createBtn(12, numbersGrid);//creates operands buttons 
createBtn(6, operatorsGrid);//creates operators buttons
const operandsBtns = Array.from(numbersGrid.querySelectorAll('button'));
const operatorsBtns = Array.from(operatorsGrid.querySelectorAll('button'))

 //number labels
operandsBtns[0].textContent = '7';
operandsBtns[1].textContent = '8';
operandsBtns[2].textContent = '9';
operandsBtns[3].textContent = '4';
operandsBtns[4].textContent = '5';
operandsBtns[5].textContent = '6';
operandsBtns[6].textContent = '1';
operandsBtns[7].textContent = '2';
operandsBtns[8].textContent = '3';
operandsBtns[9].textContent = '-';
operandsBtns[10].textContent = '0';
operandsBtns[11].textContent = '.';

//operators labels
operatorsBtns[0].textContent = '+';
operatorsBtns[1].textContent = '-';
operatorsBtns[2].textContent = '*';
operatorsBtns[3].textContent = '/';
operatorsBtns[4].textContent = '=';
operatorsBtns[5].textContent = 'C';


//operators style
operatorsBtns.forEach((item)=>{
    item.style.height = '100%'
})
function createBtn(numButtons,father){
    for(let i = 0; i<numButtons; i++){
        let btn = document.createElement('button');
        father.appendChild(btn);
        btn.style.width = '33%';
        btn.style.height = '25%';
        btn.classList = `btn${i}`;
}
}

//display test
// display1.textContent ='1'
// display2.textContent ='2'
// resultado.textContent = '3'

//operands buttons add a number to an array 
//& array to a string & that string show it in .display1
let display1Array = [];//se forma con .push()
let operands1 = '';//se forma con display1Array.join(')
operandsBtns.forEach((item)=>{
    item.addEventListener('mousedown',()=>{
        display1Array.push(item.textContent);

    })
    item.addEventListener('mouseup',()=>{
       operands1 = display1Array.join(''); 
       console.log(operands1)
       display1.textContent = operands1
    })
})

//clicking on a operator button except 'C' saves the text content to a variable
//& makes the operands buttons push to display2Array
//& this array shows in display2
