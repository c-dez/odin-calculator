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

 //mejor hacer lo anterio con switches y agregar class=btn'x'
 function labels(item,symbol){
    item.classList.add(`numb${symbol}`);
    item.textContent=`${symbol}`;
    item.addEventListener('mousedown',(item)=>{
    console.log(symbol)
    // display.textContent = `${displayNum1.join('').toString()}`
    displayNum1.push(symbol);
    })
    item.addEventListener('mouseup',(item)=>{
        display.textContent = `${displayNum1.join('').toString()}`
    })
}
allNumBtn.forEach((item)=>{
    switch (item){
        case allNumBtn[0]:
            labels(item, 7);
                break;
        case allNumBtn[1]:
            labels(item, 8);
                break;
        case allNumBtn[2]:
            labels(item, 9);
                break;
        case allNumBtn[3]:
            labels(item, 4);
                break;
        case allNumBtn[4]:
            labels(item, 5);
                break;
        case allNumBtn[5]:
            labels(item, 6);
                break;        
        case allNumBtn[6]:
            labels(item, 1);
                break;
        case allNumBtn[7]:
            labels(item, 2);
                break;
        case allNumBtn[8]:
            labels(item, 3);
                break;   
        case allNumBtn[9]:
            labels(item, '+/-');
                break;
        case allNumBtn[10]:
            labels(item, 0);
                break;
        case allNumBtn[11]:
            labels(item, '.');
                break;   
    }
},0)
//display   
const displayNum1 = [];
const displayNum2 = [];
display.textContent = `${displayNum1.join('').toString()}`