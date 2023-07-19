const { convertWei, convertHex } = require('./converters')

chrome.contextMenus.create({
    id: 'Wei to Eth',
    title: 'Wei to Eth',
    contexts: ['selection'],
})

chrome.contextMenus.create({
    id: 'Hex Converter',
    title: 'Hex Converter',
    contexts: ['selection'],
})

let config = {
    decimalsValue: 18,
    displayDecimalsValue: 18,
}
chrome.storage.local.get(['decimals']).then((result) => {
    config.decimalsValue = +result.decimals
})

chrome.storage.local.get(['displayDecimals']).then((result) => {
    config.displayDecimalsValue = +result.displayDecimals
})

let preConverted
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === 'Wei to Eth') {
        preConverted = info.selectionText
        console.log(config.decimalsValue)
        console.log(config.displayDecimalsValue)

        let convertedEth = convertWei(
            info.selectionText,
            config.decimalsValue,
            config.displayDecimalsValue
        )
        console.log(preConverted)
        console.log(convertedEth)
        chrome.storage.local.set({ Str: convertedEth })
        chrome.storage.local.set({ conversionType: 'wei' })
        chrome.storage.local.set({ preConverted: preConverted })
    }
})

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === 'Hex Converter') {
        preConverted = info.selectionText
        let convertedHex = convertHex(info.selectionText)
        let cutHex = convertWei(
            convertedHex,
            config.decimalsValue,
            config.displayDecimalsValue
        )
        console.log(preConverted)
        chrome.storage.local.set({ Str: cutHex })
        chrome.storage.local.set({ conversionType: 'hex' })
        chrome.storage.local.set({ preConverted: preConverted })
    }
})
