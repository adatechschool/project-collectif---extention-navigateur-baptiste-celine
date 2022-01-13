const CLEFAPI = '502bb5578bc8df2468a9394712df038c';
const temperature = document.querySelector(".temperature");
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
    })
}
