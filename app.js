const display = document.querySelector('.display')
const operands = document.querySelectorAll('#operand')
const operator = document.querySelectorAll('#operator')
const clearBtn = document.querySelector('#clear')


clearBtn.addEventListener('mousedown',()=>{
    display.textContent = '';
})

operands.forEach((button)=>{
        button.addEventListener('mousedown',()=>console.log(button.textContent))
})