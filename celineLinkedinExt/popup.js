//popup.js
function OpenURL() {
    chrome.tabs.create({ url: "https://www.linkedin.com/in/celinebarbe/" });
}
document.getElementById("openBtn").addEventListener("click", OpenURL);