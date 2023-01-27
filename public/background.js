const canAccess = () => {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    return (hours <= 18) ? true : false;
};
console.log("i am here")
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

// "*://*.youtube/*"

// chrome.tabs.query({url: "*://*/*"}, tabs => {
//     console.log("tabs: ", tabs.length);
//     if (tabs.length === 0) return;
//     console.log(typeof tabs)
//     console.log(tabs)
    
//     if (!canAccess()) {
//         console.log("cannot access")
//         let i;
//         for (i = 0; i < tabs.length; i++) {
//             // chrome.tabs.onUpdate.addListener((tabs[i].id, {url: "*://*.youtube/*"}) => {
//             //     chrome.tabs.sendMessage(tabs[i].id, {type: "block"})
//             // });
//         };
//     }
// });

const blockList = ["youtube", "facebook", "twitter", "linkedin", "instagram", "chess"];

chrome.tabs.onUpdated.addListener((id, changedInfo, tab) => {
  const site = new URL(tab.url).hostname.slice(4, -4);

  if(blockList.includes(site) && !canAccess()) {
    console.log("definitely hit this")
    chrome.tabs.sendMessage(id, {type: "block"});
    console.log("hit this")
  }
});
