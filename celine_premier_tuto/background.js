let color = '#D79C5F';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Dango everywhere!');
});
