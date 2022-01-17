function openNewTab() {
    var newURL = "page.html";
    chrome.tabs.create({ url: newURL });
}

document.getElementById("open").addEventListener("click", openNewTab);
