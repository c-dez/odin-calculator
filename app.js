//Calculadora
//crear lo suficiente para probar
//display que muestre '1+1'
const calculator = document.querySelector('.calculator')
//display
const display = document.createElement('div');
calculator.appendChild(display);

display.style.display = 'flex';
display.style.width = '80%'
display.style.height = '15%'
display.style.border = '1px solid black'
display.style.margin = '5px';
// display.style.boxSizing = 'box'
display.style.backgroundColor = 'green'
//display text
display.textContent = 'hello'

//botones all
const btnContainer = document.createElement('div');
calculator.appendChild(btnContainer);

btnContainer.style.width = '80%'
btnContainer.style.height = '80%'
btnContainer.style.margin = '5px';

btnContainer.style.border = '1px solid black'

