console.log("got here")
chrome.runtime.onMessage.addListener(req => {
    console.log('testing')
    if (req.type === "block") {
        window.location = chrome.extension.getURL("index.html");
    }
});