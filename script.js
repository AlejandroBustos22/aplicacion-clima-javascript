let url = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'd9e0396157befecacd0d3b1f12d0ad52'
let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)

        }
    })

function fetchDatosClima(ciudad){
    fetch(`${url}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    const datosClimaMostrar = document.getElementById('datosClima')
    datosClimaMostrar.innerHTML = ''

    const ciudadNombre = response.name
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description
    const pais = response.sys.country
    const tempMax = response.main.temp_max
    const tempMin = response.main.temp_min
    const humedad = response.main.humidity
    const icono = response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${pais}`

    const temperaturaParrafo = document.createElement('p')
    temperaturaParrafo.textContent = `La temperatura es de: ${Math.floor(temperatura-difKelvin)}°C`

    const temperaturaMax = document.createElement('p')
    temperaturaMax.textContent = `Temperatura maxima para hoy: ${Math.floor(tempMax-difKelvin)}°C`

    const temperaturaMin = document.createElement('p')
    temperaturaMin.textContent = `Temperatura minima para hoy: ${Math.floor(tempMin-difKelvin)}°C`

    const descripcionParrafo = document.createElement('p')
    descripcionParrafo.textContent = `La descripcion meteorologica es: ${descripcion}`

    const humedadParrafo = document.createElement('p')
    humedadParrafo.textContent = `La humedad es de: ${humedad}%`

    const iconoImg = document.createElement('img')
    iconoImg.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    datosClimaMostrar.appendChild(ciudadTitulo)
    datosClimaMostrar.appendChild(temperaturaParrafo)
    datosClimaMostrar.appendChild(temperaturaMax)
    datosClimaMostrar.appendChild(temperaturaMin)
    datosClimaMostrar.appendChild(humedadParrafo)
    datosClimaMostrar.appendChild(iconoImg)
    datosClimaMostrar.appendChild(descripcionParrafo)
}
