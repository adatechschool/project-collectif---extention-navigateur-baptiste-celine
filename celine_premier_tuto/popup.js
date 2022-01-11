// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

/*chrome.storage.sync.get("color", ({ color }) => {
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
     // document.querySelector("p").style.color = color;
      let images = document.getElementsById("input");
      console.log('hello world');
      for (var i = 0; i < images.length; i++) {
        images[i].src ;
    }
    });
  }*/
  function verif_champ()
  {
  var mots_cles =document.getElementById ("input").value;
          if (mots_cles == "")
          {
         alert ("Un champ n'est pas remplie");
          return false;
          }
          console.log(mots_cles);
  }
  document.getElementById("bouton").addEventListener("click", verif_champ)