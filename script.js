const key = '70e58d557b7a11d986303b4069d209a5'

function searchBtn() {
    let city = document.querySelector('.searchPlace').value

    searchCity(city)
}

async function searchCity(city) {

    let dados = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + 
        city + 
        '&appid=' + 
        key +
        '&lang=pt_br' +
        '&units=metric'
    ).then(replay => replay.json())
    changeLetter(dados)
}

function changeLetter(dados) {
    console.log(dados)

    document.querySelector('#stateTemp').innerHTML = 'Temperatura em ' + dados.name
    document.querySelector('#temp').innerHTML =  Math.floor(dados.main.temp) + '°C'
    document.querySelector('#description').innerHTML = dados.weather[0].description
    document.querySelector('#humidity').innerHTML = 'Umidade: ' + dados.main.humidity + '%'
}