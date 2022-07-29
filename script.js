const container = document.querySelector('#container')

function addElements(x){
    let amount = x*x
    for (let i = 0; i < amount; i++){
        const aArea = document.createElement('div')
        aArea.setAttribute('id', 'pixel')
        container.appendChild(aArea)
    }
}

function removeElements(){
    const canvas = document.querySelectorAll('#pixel')
    canvas.forEach(pixel => {
        pixel.remove()
    });
}



const button = document.querySelector('#new')
button.addEventListener('click', (e) => {
    let amount = prompt('enter amount')
    removeElements()
    addElements(amount)

    const canvas = document.querySelectorAll('#pixel')

    canvas.forEach((pixel) => {
        pixel.addEventListener('mouseover', (e) =>{
            pixel.style.backgroundColor = 'black'
        })
    })
})