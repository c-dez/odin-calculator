function createGrid(num, father){
    const ul = document.createElement('ul');
    father.appendChild(ul);
    for(let i =0;i<num;i++){
        const li = document.createElement('button');
        ul.appendChild(li)
        li.textContent = `btn${[i]}`
        li.classList= [i]
        li.addEventListener('click',(e)=>{
            console.log(e.textContent)
        })
        
    }
}

const numbersGrid = document.querySelector('#numbersGrid')
createGrid(3, numbersGrid)