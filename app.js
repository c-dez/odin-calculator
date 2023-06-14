const display = document.querySelector('.display')
const operandsBtns = document.querySelectorAll('#operand')
const operatorBtns = document.querySelectorAll('#operator')
const clearBtn = document.querySelector('#clear')

//first operand
let firstOperand = '';
//operator
let operator = '';
//second operand
let secondOperand = '';

//clearBtn
clearBtn.addEventListener('mousedown',()=>{
    // display.textContent = '';
    firstOperand = '';
    display.textContent = firstOperand;
})

//operandsBtns
operandsBtns.forEach((button)=>{
    button.addEventListener('mousedown',()=>{
    console.log(button.textContent);
    firstOperand += button.textContent;
    })
    button.addEventListener('mouseup', ()=>{
        display.textContent = firstOperand;
    })
})

//operatorBtns
operatorBtns.forEach((button)=>{
    button.addEventListener('mousedown',()=>{
       operator = button.textContent;
    })
})
