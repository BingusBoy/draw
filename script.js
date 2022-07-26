const container = document.querySelector('#container')
function addElements(amount){
    for (let i = 0; i < amount; i++){
        const aArea = document.createElement('div')
        aArea.setAttribute('id', 'pixel')
        container.appendChild(aArea)
    }
}

// function changeColor(e){
//     e.style.backgroundColor = 'red'
//     console.log(e)
// }


const button = document.querySelector('#new')
console.log(button)
button.addEventListener('click', (e) => {
    console.log(e)
    let amount = prompt('enter amount')
    addElements(amount)
    const canvas = document.querySelectorAll('#pixel')
    console.log(canvas)
    canvas.forEach((pixel) => {
        pixel.addEventListener('mouseover', (e) =>{
            pixel.style.backgroundColor = 'red'
        })
    })
    canvas.forEach((pixel) => {
        pixel.addEventListener('mouseleave', (e) =>{
            pixel.style.backgroundColor = 'lightblue'
        })
    })
})