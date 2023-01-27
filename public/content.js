chrome.runtime.onMessageExternal.addListener(req => {
    console.log('Received message');
    if (req.type === 'block') {
        console.log("blocking")
        window.location = chrome.extension.getURL("index.html");
    }
});