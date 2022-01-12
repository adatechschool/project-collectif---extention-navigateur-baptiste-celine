let color = '#00ffff';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('is that what you really want ? <.<');
});
