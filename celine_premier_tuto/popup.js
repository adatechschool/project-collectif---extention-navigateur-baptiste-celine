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
        images[i].src = "https://cdn.discordapp.com/attachments/920638121178177566/930086210578305074/IMG_6315.jpg";
    }
    });
  }