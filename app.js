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
let operatorAdded = false;
//clearBtn
clearBtn.addEventListener('mousedown',()=>{
    // display.textContent = '';
    firstOperand = '';
    display.textContent = firstOperand;
    operator = '';
    operatorAdded =false;
})

//operandsBtns
operandsBtns.forEach((button)=>{
    button.addEventListener('mousedown',(button)=>{
        if(!operatorAdded){
            // btnEventFirst(button);
            console.log('first')
        }else{
            // btnEventSecond(button);
            console.log('second')

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
