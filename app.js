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

//buttons numbers numbersGrid
const numbersGrid = document.createElement('div');
btnContainer.appendChild(numbersGrid);
numbersGrid.classList.add('numbersGrid')
numbersGrid.style.display='flex'
numbersGrid.style.flexWrap= 'wrap'
// numbersGrid.style.flexDirection = 'row-reverse'
numbersGrid.style.justifyContent = 'center';


//function creates num number of buttons
function createButtons(num,father){
for(let i =0; i<num; i++){
    const btn = document.createElement('button');
    // btn.id=('btn'+[i]);
    btn.textContent = `${[i]}`;
    father.appendChild(btn);
}
}
createButtons(12,numbersGrid);
//btn 0-9
const allNumBtn =Array.from( numbersGrid.querySelectorAll('button'));
numbersGrid.id='numbersGrid';


//asigna tama;o a cada button de allNumBtn
allNumBtn.forEach(item =>{
    item.style.width='30%'
    item.style.height='40px'

})
//array de objetos


// function CreateBtnObj(symbol){
//     this.symbol = symbol;
//     this.classList = `btn${symbol}`;
//     this.behavior =()=>{

//     }
// }
 allNumBtn[0].textContent =7;
 allNumBtn[1].textContent =8;
 allNumBtn[2].textContent =9;
 allNumBtn[3].textContent =4;
 allNumBtn[4].textContent =5;
 allNumBtn[5].textContent =6;
 allNumBtn[6].textContent =1;
 allNumBtn[7].textContent =2;
 allNumBtn[8].textContent =3;
 allNumBtn[9].textContent =0;
 allNumBtn[10].textContent ='.';
 allNumBtn[11].textContent ='+/-';

