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

//botones all btnContainer
const btnContainer = document.createElement('div');
calculator.appendChild(btnContainer);
btnContainer.classList.add('btnContainer')
btnContainer.style.width = '80%'
btnContainer.style.height = '80%'
btnContainer.style.margin = '5px';
btnContainer.style.border = '1px solid black'

//buttons numbers
const numbersGrid = document.createElement('div');
btnContainer.appendChild(numbersGrid);
numbersGrid.classList.add('numbersGrid')

//function creates num number of buttons
function createButtons(num,father){
for(let i =0; i< num; i++){
    const btn = document.createElement('button');
    btn.classList.add('btn'+[i])
    father.appendChild(btn);
}

}
createButtons(10,numbersGrid);