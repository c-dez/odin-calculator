
const display = document.querySelector('#display .display1');
const display2 = document.querySelector('#display .display2');
const numbersGrid = document.querySelector('#numbersGrid');
const operatorsGrid = document.querySelector('#operatorsGrid');

//create buttons for operands & operators
createBtn(12, numbersGrid);//creates operands buttons 
createBtn(5, operatorsGrid);//creates operators buttons
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



