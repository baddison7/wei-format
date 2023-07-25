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
chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId === 'Wei to Eth') {
        const preConverted = info.selectionText
        chrome.storage.local.set({
            selectedStr: preConverted,
            selectedConversionType: 'wei',
        })
    }
})

chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId === 'Hex Converter') {
        const preConverted = info.selectionText
        chrome.storage.local.set({
            selectedStr: preConverted,
            selectedConversionType: 'hex',
        })
    }
})
