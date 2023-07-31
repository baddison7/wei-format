const { convertWei, convertHex, convertUnix } = require('./converters')

document.addEventListener('DOMContentLoaded', function () {
    let preConverted
    let conversionType

    chrome.storage.local.get(['selectedStr', 'conversionType']).then((result) => {
        preConverted = result.selectedStr
        conversionType = result.conversionType

        if (conversionType === 'wei' || conversionType === 'hex') {
            chrome.storage.local.get(['decimals', 'displayDecimals']).then((result) => {
                document.getElementById('displayDecimals').value = result.displayDecimals
                document.getElementById('decimals').value = result.decimals

                let convertedWei = preConverted
                if (conversionType === 'hex') {
                    convertedWei = convertHex(convertedWei)
                }
                convertedWei = convertWei(convertedWei, result.decimals, result.displayDecimals)
                document.getElementById('convertedStr').textContent = convertedWei
            })
        } else if (conversionType === 'unixTime') {
            document.getElementById('decimalsForm').style.display = 'none'
            const { currentTimeZone, UTC } = convertUnix(preConverted)
            console.log(currentTimeZone)
            console.log(UTC)
            document.getElementById('convertedStr').textContent = currentTimeZone
            document.getElementById('convertedStr2').textContent = UTC
        }
    })

    document.getElementById('decimalsForm').addEventListener('submit', function (event) {
        event.preventDefault() // Prevent the default form submission
        const decimals = document.getElementById('decimals').value
        const displayDecimals = document.getElementById('displayDecimals').value
        chrome.storage.local.set({ decimals: decimals, displayDecimals: displayDecimals })

        let convertedWei = preConverted
        if (conversionType === 'hex') {
            convertedWei = convertHex(convertedWei)
        }
        convertedWei = convertWei(convertedWei, decimals, displayDecimals)
        document.getElementById('convertedStr').textContent = convertedWei
    })
})
