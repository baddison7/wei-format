const { convertWei, convertHex } = require('./converters')

document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get(['Str']).then((result) => {
        const storedStr = result.Str
        let text = (document.getElementById('Eth').textContent = storedStr)
    })

    let decimalsValue
    chrome.storage.local.get(['decimals']).then((result) => {
        decimalsValue = result.decimals
        document.getElementById('decimals').value = decimalsValue
    })

    let displayDecimalsValue
    chrome.storage.local.get(['displayDecimals']).then((result) => {
        displayDecimalsValue = result.displayDecimals
        document.getElementById('displayDecimals').value = displayDecimalsValue
    })

    const form = document.getElementById('decimalsForm')

    form.addEventListener('submit', function (event) {
        event.preventDefault() // Prevent the default form submission

        console.log('set')
        // decimals
        let decimalsValue = document.getElementById('decimals').value
        chrome.storage.local.set({ decimals: decimalsValue })

        // display decimals
        let displayDecimalsValue =
            document.getElementById('displayDecimals').value
        chrome.storage.local.set({ displayDecimals: displayDecimalsValue })

        // reconverting the number
        let preConverted
        let conversionType
        chrome.storage.local.get(['preConverted']).then((result) => {
            preConverted = result.preConverted
            console.log(`1 ${preConverted}`)
            chrome.storage.local.get(['conversionType']).then((result) => {
                conversionType = result.conversionType
                console.log(`1 ${conversionType}`)

                if ((conversionType = 'wei')) {
                    const convertedWei = convertWei(
                        preConverted,
                        decimalsValue,
                        displayDecimalsValue
                    )
                    console.log(convertedWei)
                    let text = (document.getElementById('Eth').textContent =
                        convertedWei)
                } else if ((conversionType = 'hex')) {
                    let convertedHex = convertHex(preConverted)
                    convertedHex = convertWei(convertedHex)
                    let text = (document.getElementById('Eth').textContent =
                        'convertedHex')
                }
            })
        })
    })
})
