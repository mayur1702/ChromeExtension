chrome.runtime.onInstalled.addListener(() => {
    alert("Extension has been installed");
});

chrome.bookmarks.onCreated.addListener(() => {
    alert("New bookmar added");
});