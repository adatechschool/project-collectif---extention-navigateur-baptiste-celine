const CLEFAPI = '502bb5578bc8df2468a9394712df038c';
const temperature = document.querySelector("#temperature");
const temperatureRessentie = document.querySelector("#temperatureRessentie");
const humidity = document.querySelector("#humidity");
const pressure = document.querySelector("#pressure");
const imgIcone = document.querySelector(".logo-meteo");
const chargementContainer = document.querySelector(".cssload-dots");
const svg = document.querySelector("#svg");
let resultatsAPI;  

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        AppelAPI(long, lat);
    }, () => {
        alert(`Vous avez refusé la géolocalisation, l'application ne peux pas fonctionner, veuillez l'activer!`)
    })
}

function AppelAPI(long, lat) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEFAPI}`)
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
        resultatsAPI = data;
        temperature.innerText = `Température actuelle : ${Math.trunc(resultatsAPI.current.temp)}°C`;
        temperatureRessentie.innerText = `Température ressentie : ${Math.trunc(resultatsAPI.current.feels_like)}°C`;
        humidity.innerText = `Humidité : ${resultatsAPI.current.humidity}%`;
        pressure.innerText = `Pression : ${resultatsAPI.current.pressure}hPa`;
        // pressure
        // en fonction du temps renvoyer une icone plutôt
        let heureActuelle = new Date().getHours();
        if(heureActuelle >=6 && heureActuelle < 20) {
            imgIcone.src = `weatherIcons/day/${resultatsAPI.current.weather[0].icon}.png`
        } else {
            imgIcone.src = `weatherIcons/night/${resultatsAPI.current.weather[0].icon}.png`}

        console.log(resultatsAPI);
        chargementContainer.classList.add('disparition');
        svg.classList.add('svgDisparition');
    })
}
