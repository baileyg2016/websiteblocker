const canAccess = () => {
    var today = new Date();
    var hours = today.getHours();
    return (hours <= 23 && hours >= 18) ? true : false;
};

chrome.tabs.query({url: "*://*.youtube.com/*"}, tabs => {
    console.log("tabs: ", tabs.length);
    if (tabs.length === 0) return;
    console.log(typeof tabs)
    
    
    if (canAccess()) {
        var i;
        for (i = 0; i < tabs.length; i++) {
            console.log(tabs[i].url)
            console.log(tabs[i].id)
            chrome.tabs.sendMessage(tabs[i].id, {type: 'block'});
        };
    }
});
