const containerDiv = document.querySelector('.container')
const input = document.querySelector('#grid-no')
const output = document.querySelector('.result-grid')

function randomColor(){
    let color = '#'
    let hex = 'abcdef0123456789'
    for(let i = 0;i<6;i++){
        let random = Math.floor(Math.random()*16)+1
        let newran = hex[random]
        color+=newran
    }
    return color
}


function createGrid(grids){
    
    for (let i = 0; i < grids*grids; i++) {
        let opca = 0.1
        let widthGrid = `calc(100%/${grids})`
        let heightGrid = `calc(100%/${grids})`
        const divGrids = document.createElement('div')
        divGrids.style.width=widthGrid
        divGrids.style.height=heightGrid
        divGrids.classList.add('newdivs')
        containerDiv.appendChild(divGrids)
        divGrids.addEventListener("mouseover",()=>{
            divGrids.style.opacity=opca
            opca+=0.1
            divGrids.style.backgroundColor=randomColor()
        })
        
            
    } 
}

input.addEventListener('click',(e)=>{
    output.textContent = e.target.value
    containerDiv.textContent = ''
    createGrid(output.value)
})


document.addEventListener('DOMContentLoaded',()=>createGrid(16))



