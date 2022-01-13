const CLEFAPI = '502bb5578bc8df2468a9394712df038c';
const temperature = document.querySelector(".temperature");
const imgIcone = document.querySelector('.logo-meteo');
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
        temperature.innerText = `${Math.trunc(resultatsAPI.current.temp)}°C`;
        // en fonction du temps renvoyer une icone plutôt
        let heureActuelle = new Date().getHours();
        if(heureActuelle >=6 && heureActuelle < 20) {
            imgIcone.src = `weatherIcons/day/${resultatsAPI.current.weather[0].icon}.png`
        } else {
            imgIcone.src = `weatherIcons/night/${resultatsAPI.current.weather[0].icon}.png`}

        console.log(resultatsAPI);
    })
}
