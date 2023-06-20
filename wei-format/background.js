chrome.contextMenus.create({
    id: "ContextMenu",
    title: "Wai to Eth",
    contexts: ["selection"],
});

//chatgpt
function addCommas(str) {
    // Reverse the string for easier manipulation
    str = str.split('').reverse().join('');

    // Insert commas after every three characters
    str = str.replace(/(\d{3})/g, '$1,');

    // Remove trailing comma if present
    if (str.slice(-1) === ',') {
        str = str.slice(0, -1);
    }

    // Reverse the string back to its original order
    str = str.split('').reverse().join('');

    return str;
}

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "ContextMenu") {
        let selectedText = info.selectionText;
        let cutString = selectedText.substring(0, selectedText.length - 18);
        let withCommas = addCommas(cutString)
        console.log(withCommas)

        chrome.storage.sync.set({ key: withCommas }).then(() => {
            console.log("Value is set");
        })
    }
});