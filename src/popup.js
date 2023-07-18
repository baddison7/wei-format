document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get(['Str']).then((result) => {
        const storedStr = result.Str
        const text = (document.getElementById('Eth').textContent = storedStr)
    })

    let decimalsValue
    chrome.storage.local.get(['decimals']).then((result) => {
        decimalsValue = result.decimals
        console.log(decimalsValue)
        document.getElementById('decimals').value = decimalsValue
    })

    let displayDecimalsValue
    chrome.storage.local.get(['displayDecimals']).then((result) => {
        displayDecimalsValue = result.displayDecimals
        console.log(displayDecimalsValue)
        document.getElementById('displayDecimals').value = displayDecimalsValue
    })

    const form = document.getElementById('decimalsForm')

    form.addEventListener('submit', function (event) {
        event.preventDefault() // Prevent the default form submission

        // decimals
        let decimalsValue = document.getElementById('decimals').value
        chrome.storage.local.set({ decimals: decimalsValue })

        // display decimals
        let displayDecimalsValue =
            document.getElementById('displayDecimals').value
        chrome.storage.local.set({ displayDecimals: displayDecimalsValue })
    })
})
