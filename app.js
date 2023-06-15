const display = document.querySelector('.display');
const operandsBtns = document.querySelectorAll('#operand');
const operatorBtns = document.querySelectorAll('#operator');
const clearBtn = document.querySelector('#clear');
const equalsBtn = document.querySelector('#equals');
const negBtn = document.querySelector('#neg');
//first operand
let firstOperand = '';
//operator
let operator = '';
//second operand
let secondOperand = '';
let operatorAdded = false;//if false operandsBtns add to firstOperand else secondOperand
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
    switch (operator){
        case '+':
            sum(firstOperand, secondOperand);
            display.textContent = result;
            break;
        case '-':
            substraction(firstOperand,secondOperand)
            display.textContent = result;
            break;
        case '*':
            multiplication(firstOperand,secondOperand)
            display.textContent = result;
            break;
        case '/':
            division(firstOperand,secondOperand)
            display.textContent = result;
            break;
        default:

    }
})
//negBtn
negBtn.addEventListener('mousedown', ()=>{
    if(!operatorAdded){
        firstOperand += '-';
        display.textContent += firstOperand;
    }else{
        secondOperand += '-';
        display.textContent += secondOperand;
    }
})

//functions for each operator
//sum
function sum(a, b){//a =firstOperand b = secondOperand
   result = parseFloat(a) + parseFloat(b)
}
//substraction
function substraction(a,b){
    result = parseFloat(a) - parseFloat(b)
}
//multiplication
function multiplication(a,b){
    result = parseFloat(a) *parseFloat(b);
}
//division
function division(a,b){
    if(a ==0 || b == 0){
        result = 'ERROR!';
    }else{
        result = parseFloat(a) / parseFloat(b);
    }
}



