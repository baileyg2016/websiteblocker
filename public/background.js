const canAccess = () => {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    return (hours >= 18) ? true : false;
};

function ensureSendMessage(tabId, message/*, callback*/){
    chrome.tabs.sendMessage(tabId, {ping: true}, function(response){
      if(response && response.pong) { // Content script ready
        chrome.tabs.sendMessage(tabId, message);
      } else { // No listener on the other end
        chrome.tabs.executeScript(tabId, {file: "content_script.js"}, function(){
          if(chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            throw Error("Unable to inject script into tab " + tabId);
          }
          // OK, now it's injected and ready
          chrome.tabs.sendMessage(tabId, message);
        });
      }
    });
}

// "*://*.youtube.com/*"

// chrome.tabs.query({url: "*://*/*"}, tabs => {
//     console.log("tabs: ", tabs.length);
//     if (tabs.length === 0) return;
//     console.log(typeof tabs)
//     console.log(tabs)
    
//     if (!canAccess()) {
//         console.log("cannot access")
//         let i;
//         for (i = 0; i < tabs.length; i++) {
//             // chrome.tabs.onUpdate.addListener((tabs[i].id, {url: "*://*.youtube.com/*"}) => {
//             //     chrome.tabs.sendMessage(tabs[i].id, {type: "block"})
//             // });
//         };
//     }
// });

chrome.tabs.onUpdated.addListener((id, changedInfo, tab) => {
    if((tab.url.includes("youtube") || tab.url.includes("instagram")) && tab.url.includes("chess") && !canAccess()) {
      chrome.tabs.sendMessage(id, {type: "block"});
    }
});
