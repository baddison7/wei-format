chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'weiConverter',
        title: 'Wei to Eth',
        contexts: ['selection'],
    })
    chrome.contextMenus.create({
        id: 'hexConverter',
        title: 'Hex Converter',
        contexts: ['selection'],
    })
    chrome.contextMenus.create({
        id: 'timeConverter',
        title: 'Unix Timestamp Converter',
        contexts: ['selection'],
    })
    chrome.storage.local.set({
        decimals: 18,
        displayDecimals: 18,
        selectedStr: 1000000000000000000,
        conversionType: 'wei',
    })
})

chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId === 'weiConverter') {
        const preConverted = info.selectionText
        chrome.storage.local.set({
            selectedStr: preConverted,
            conversionType: 'wei',
        })
    }
})
chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId === 'hexConverter') {
        const preConverted = info.selectionText
        chrome.storage.local.set({
            selectedStr: preConverted,
            conversionType: 'hex',
        })
    }
})
chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId === 'timeConverter') {
        const preConverted = info.selectionText
        chrome.storage.local.set({
            selectedStr: preConverted,
            conversionType: 'unixTime',
        })
    }
})
