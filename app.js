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

//operandsBtns
operandsBtns.forEach((button)=>{
    button.addEventListener('mousedown',()=>{
        if(!operatorAdded){
            // btnEventFirst(button);
            firstOperand += button.textContent;
            display.textContent = firstOperand
            console.log(firstOperand)
            console.log(operatorAdded)

        }else{
            // btnEventSecond(button);
            secondOperand += button.textContent;
            display.textContent= `${firstOperand} ${operator} ${secondOperand}`;
            console.log(secondOperand)
            console.log(operatorAdded)
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
    // display.textContent = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    operatorAdded =false;
    display.textContent = '';
})
//equalsBtn



// function btnEventFirst(selector){//adds text content to the firstOperand
//     selector.forEach((button)=>{
//         button.addEventListener('mouseup',()=>firstOperand +=button.textContent)
//     })
// }
// function btnEventSecond(selector){//adds text content to the secondOperand
//     selector.forEach((button)=>{
//          button.addEventListener('mouseup',()=>secondOperand += button.textContent)
//     })
// }
