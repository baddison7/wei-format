chrome.contextMenus.create({
    id: "Wei to Eth",
    title: "Wei to Eth",
    contexts: ["selection"],
});

chrome.contextMenus.create({
    id: "Hex Converter",
    title: "Hex Converter",
    contexts: ["selection"],
})

//chatgpt
function convertWei(num) {
    const str = num.toString()
    //truncate the last 18 didgets
    let shortstr = str.substring(0, str.length - 18)
    // Reverse the string for easier manipulation
    shortstr = shortstr.split('').reverse().join('');

    // Insert commas after every three characters
    shortstr = shortstr.replace(/(\d{3})/g, '$1,');

    // Remove trailing comma if present
    if (shortstr.slice(-1) === ',') {
        shortstr = shortstr.slice(0, -1);
    }

    // Reverse the string back to its original order
    shortstr = shortstr.split('').reverse().join('');

    return shortstr;
}

//more chatgpt
function hexConverter(hex) {
    // Validate the input
    if (!hex.match(/^(0x)?[0-9A-Fa-f]+$/)) {
        throw new Error("Invalid hexadecimal input");
    }

    if (hex.startsWith("0x")) {
        hex = hex.slice(2);
    }

    // Convert the hexadecimal to decimal
    let decimal = 0;
    const hexDigits = "0123456789ABCDEF";
    hex = hex.toUpperCase();

    for (let i = 0; i < hex.length; i++) {
        const digit = hexDigits.indexOf(hex[i]);
        decimal = decimal * 16 + digit;
    }

    return decimal;
}

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "Wei to Eth") {
        let convertedEth = convertWei(info.selectionText)
        chrome.storage.local.set({ Str: convertedEth })
    }
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "Hex Converter") {
        let convertedHex = hexConverter(info.selectionText)
        console.log(convertedHex)
        let cutHex = convertWei(convertedHex)
        console.log(cutHex)
        chrome.storage.local.set({ Str: cutHex })
    }
})