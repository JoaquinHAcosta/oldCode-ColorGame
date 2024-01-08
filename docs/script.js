let cuadrados = document.querySelectorAll(".square")
let pickedColor = document.querySelector("#colorDisplay")
let mensaje = document.querySelector("span#message")
let boton = document.querySelector("button#reset")
let botonFacil = document.querySelector("#easyButton")
let botonHard = document.querySelector("#hardButton")
let h1 = document.querySelector("h1")
let botonDificultad = document.querySelectorAll(".dificultad")
let colors = []
let dificultad = 6

init()

function init() {
    colors = generateRandomColors(dificultad)
    let pickColor = winnerColor()
    pickedColor.textContent = ` ${pickColor} `
    modoJuego() 
    tablero()  
}

function modoJuego(){   
    for (let i = 0; i < botonDificultad.length; i++) {
        botonDificultad[i].addEventListener("click", function () {
        botonDificultad[0].classList.remove("selected")
        botonDificultad[1].classList.remove("selected")
            this.classList.add("selected")
        if (this.textContent == "Easy"){
            dificultad = 3
            for (let i = 3; i < cuadrados.length; i++){
                cuadrados[i].style.display = 'none'
            }
        }
        else {
            dificultad = 6
            for (let i = 3; i < cuadrados.length; i++){
                cuadrados[i].style.display = 'block'   
            }
        }
        reset()
    })
}}

/*
botonFacil.addEventListener("click", function () {
    botonFacil.setAttribute("class", "selected")
    botonHard.removeAttribute("class", "selected")
    dificultad = 3
    for (let i = 3; i < cuadrados.length; i++){
        cuadrados[i].style.display = 'none'
    }
    reset()
})

botonHard.addEventListener("click", function () {
    botonHard.setAttribute("class", "selected")
    botonFacil.removeAttribute("class", "selected")
    dificultad = 6
    for (let i = 3; i < cuadrados.length; i++){
        cuadrados[i].style.display = 'block'   
    }
    reset()
})
*/

boton.addEventListener("click", function() {
    reset()  
})

function reset() {
    h1.style.background = `rgba(139, 19, 129, 0.808)`
    colors = []
    colors = generateRandomColors(dificultad)
    pickColor = winnerColor()
    tablero()
    boton.textContent = "Nuevos colores"
    mensaje.textContent = ""
}

function randomColor() {
    let colorR = Math.floor(Math.random()*255)
    let colorG = Math.floor(Math.random()*255)
    let colorB = Math.floor(Math.random()*255)

    let color = `rgb(${colorR}, ${colorG}, ${colorB})`
    return color
}

function generateRandomColors (dificultad) {
    let array = []
    for (let i = 0; i < dificultad; i++) {
        array.push(randomColor())    
    }
    return array
}

function winnerColor() {
    let pickColor = colors[Math.floor(Math.random()*colors.length)]
    pickedColor.textContent = ` ${pickColor} `
    return pickColor
}

function tablero() {
    for (let i = 0; i < cuadrados.length; i++) {       
        cuadrados[i].style.background = colors[i] 
        cuadrados[i].addEventListener("click", function () {
            chosen = this.style.background
            if (chosen === pickColor) {
                mensaje.textContent = "¡Correcto!"
                changeColors(pickColor)
                boton.textContent = "Jugar de nuevo"
            }
            else{
                this.style.visibility = `hidden`
                mensaje.textContent = "Intentalo Nuevamente"
            }
        })
    }
}

function changeColors(winnerColor) {
    for (let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.visibility = "visible"
        cuadrados[i].style.background = winnerColor
        h1.style.background = pickColor
    }
}




