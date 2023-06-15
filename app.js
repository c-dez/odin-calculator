const display = document.querySelector('.display')
const operandsBtns = document.querySelectorAll('#operand')
const operatorBtns = document.querySelectorAll('#operator')
const clearBtn = document.querySelector('#clear')
const equalsBtn = document.querySelector('#equals')
//first operand
let firstOperand = '';
//operator
let operator = '';
//second operand
let secondOperand = '';
let operatorAdded = false;
let result = 0;

//operandsBtns
operandsBtns.forEach((button)=>{
    button.addEventListener('mousedown',()=>{
        if(!operatorAdded){
            firstOperand += button.textContent;
            display.textContent = firstOperand

        }else{
            secondOperand += button.textContent;
            display.textContent= `${firstOperand} ${operator} ${secondOperand}`;
        }
    })
})

//operatorBtns
operatorBtns.forEach((button)=>{
    button.addEventListener('mousedown',()=>{
       operator = button.textContent;
       display.textContent += operator;
       operatorAdded =true;
    })
})
//clearBtn
clearBtn.addEventListener('mousedown',()=>{
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = 0;
    operatorAdded =false;
    display.textContent = '';
})
//equalsBtn
equalsBtn.addEventListener('mousedown',()=>{
    if(operator == '+'){
        sum(firstOperand, secondOperand)
        display.textContent = result;
    }
})

//functions for each operator
function sum(a, b){//a =firstOperand b = secondOperand
   result = parseFloat(a) + parseFloat(b)
}



