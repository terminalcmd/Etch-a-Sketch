const containerDiv = document.querySelector('.container')
const button = document.querySelector('button')

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
randomColor()

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
        divGrids.addEventListener('mouseover',()=>{
            divGrids.style.opacity=opca
            opca+=0.1
            divGrids.style.backgroundColor=randomColor()
        })
    } 
}

button.addEventListener('click',()=>{
    containerDiv.textContent=''
    let nums = Number(prompt('Enter number of grids per side'))
    if(nums>0 && nums<=100){
        createGrid(nums)
    }else{
        alert('Enter a number between 1 and 100')
    }
})

document.addEventListener('DOMContentLoaded',()=>createGrid(16))



