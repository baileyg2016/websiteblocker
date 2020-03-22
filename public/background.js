const checkTime = () => {
    var today = new Date();
    var hours = today.getHours();
    console.log(hours)
    return (hours <= 23 && hours >= 18) ? true : false;
};
console.log('getting somewhere')
chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    console.log('here')
    const url = tabs[0].url;
    if (url.includes("youtube") && checkTime()) {
        chrome.tabs.sendMessage(tabs[0].id, {type: 'block'});
    }
});