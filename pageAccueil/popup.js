// action effective à l'appel du bouton de l'extension
function openNewTab() {
    var newURL = "page.html";
    chrome.tabs.create({ url: newURL });
}

document.getElementById("open").addEventListener("click", openNewTab);
