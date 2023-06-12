
const display = document.querySelector('#display .display1');
const display2 = document.querySelector('#display .display2');
const numbersGrid = document.querySelector('#numbersGrid');
const operandsGrid = document.querySelector('#operands');

//create buttons for numbers 0 -9 and negative and dot
createBtn(12, numbersGrid);//creates operands buttons 
createBtn(5, operandsGrid);//creates operators buttons
const numButtons = Array.from(numbersGrid.querySelectorAll('button'));
const operatorsBtns = Array.from(operandsGrid.querySelectorAll('button'))

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
numButtons[9].textContent = '-';
numButtons[10].textContent = '0';
numButtons[11].textContent = '.';

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



