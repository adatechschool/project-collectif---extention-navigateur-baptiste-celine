// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page

  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.querySelector("h1").style.color = color;
      let images = document.getElementsByTagName("img");
      console.log(images);
      for (var i = 0; i < images.length; i++) {
        images[i].src = motscles.value;
    }
    });
  }
  function verifChamp()
  {
  var motscles =document.getElementById("input").value;
          if (motscles == "")
          {
         alert ("Un champ n'est pas remplie");
          return false;
          }
          console.log(motscles);
          setPageBackgroundColor(motscles)
  }
  document.getElementById("bouton").addEventListener("click", verifChamp)