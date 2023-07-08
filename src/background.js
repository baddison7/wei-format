const { convertWei, convertHex } = require("./converters")

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

const config = {
    decimals: 18,
    displayDecimals: 18
}
chrome.storage.local.get(["decimals"]).then((result) => {
    config.decimals = parseInt(result.decimals)
    console.log(config.decimals)
})

chrome.storage.local.get(["displayDecimals"]).then((result) => {
    config.displayDecimals = parseInt(result.displayDecimals)
    console.log(config.displayDecimals)
})


chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "Wei to Eth") {
        let convertedEth = convertWei(info.selectionText, config.decimals, config.displayDecimals)
        chrome.storage.local.set({ Str: convertedEth })
    }
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "Hex Converter") {
        let convertedHex = convertHex(info.selectionText)
        let cutHex = convertWei(convertedHex, config.decimals, config.displayDecimals)
        chrome.storage.local.set({ Str: cutHex })
    }
})
