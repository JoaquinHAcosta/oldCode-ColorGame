let enviar = document.querySelector("#send")
let city = document.querySelector("#city")
let ciudadM = document.querySelector("#ciudad")
let tempM = document.querySelector("#temperatura")
let iconM = document.querySelector("#wicon")
let descM = document.querySelector("#descripcion")

function cargarCiudad() {
    let ciudad = city.value

    ciudadM.innerHTML 

    document.querySelector(".container").style.visibility ="visible"

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ ciudad +"&appid=fdd533266e28101881f610f2b8f1ebe1", function (data) {
        console.log(data)
        ciudadM.innerHTML = data.name
        tempM.innerHTML= `${Math.round(data.main.temp / 10)}<sup>°C</sup> `
        iconM.setAttribute("src", "http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png")
        descM.innerHTML = data.weather[0].main
    })
    .fail( function() {
        alert( ` ${ciudad} no es una ciudad!` );
    });
}

enviar.addEventListener("click", function () {
    if (city.value == "") {
        alert("No escribiste nada zapallin")
    } else {
        cargarCiudad()
        city.value = ""
    }
})


