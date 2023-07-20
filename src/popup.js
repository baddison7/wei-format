const { converter } = require('./converters')

document.addEventListener('DOMContentLoaded', function () {
    let preConverted
    let conversionType

    chrome.storage.local
        .get(['selectedStr', 'selectedConversionType', 'decimalsValue', 'displayDecimalsValue'])
        .then((result) => {
            preConverted = result.selectedStr
            conversionType = result.selectedConversionType
            let decimalsValue = result.decimalsValue
            let displayDecimalsValue = result.displayDecimalsValue
            document.getElementById('displayDecimals').value = displayDecimalsValue
            document.getElementById('decimals').value = decimalsValue

            const convertedStr = converter(
                preConverted,
                decimalsValue,
                displayDecimalsValue,
                conversionType
            )

            let text = (document.getElementById('Eth').textContent = convertedStr)
        })

    const form = document.getElementById('decimalsForm')
    form.addEventListener('submit', function (event) {
        event.preventDefault() // Prevent the default form submission

        let decimalsValue = document.getElementById('decimals').value
        let displayDecimalsValue = document.getElementById('displayDecimals').value

        chrome.storage.local.set({
            decimalsValue: decimalsValue,
            displayDecimalsValue: displayDecimalsValue,
        })

        const convertedStr = converter(
            preConverted,
            decimalsValue,
            displayDecimalsValue,
            conversionType
        )

        let text = (document.getElementById('Eth').textContent = convertedStr)
    })
})
