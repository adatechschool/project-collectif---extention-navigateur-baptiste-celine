// récupérer le choix par le bouton
function loadImg(animalPicted) {
    const url = `https://api.unsplash.com/search/photos?query=${animalPicted}&client_id=g7VPYjmiWuFAChGHoTnicF_sM51x3hMUO7gP1mRiseg`;
    let imageDiv = document.querySelector('.imageUnsplash');
    // vider la div de sa précédente image
    if (imageDiv.innerHTML) {
        imageDiv.innerHTML = "";
    }
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => { 
            console.log(data); 
            let imageElement = document.createElement('img');
            let i = Math.floor(Math.random() * 10); 
            imageElement.src =data.results[i].urls.thumb;
            imageDiv.appendChild(imageElement);
            console.log(imageDiv);
        });
};

function selectCat() {
    let animalPicted = "cat";
    console.log(animalPicted);
    loadImg(animalPicted);
};
function selectDog() {
    let animalPicted = "dog";
    console.log(animalPicted);
    loadImg(animalPicted);
};
function selectBunny() {
    let animalPicted = "bunny";
    console.log(animalPicted);
    loadImg(animalPicted);
};
function selectOtter() {
    let animalPicted = "otter";
    console.log(animalPicted);
    loadImg(animalPicted);
};

document.getElementById("cat").addEventListener("click", selectCat);
document.getElementById("dog").addEventListener("click", selectDog);
document.getElementById("bunny").addEventListener("click", selectBunny);
document.getElementById("otter").addEventListener("click", selectOtter);
