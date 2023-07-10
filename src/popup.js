document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get(['Str']).then((result) => {
        storedStr = result.Str
        console.log(storedStr)
        const text = (document.getElementById('Eth').textContent = storedStr)
    })

    const form = document.getElementById('decimalsForm')

    form.addEventListener('submit', function (event) {
        event.preventDefault() // Prevent the default form submission

        // decimals
        const decimalsInput = document.getElementById('decimals')
        const decimalsValue = decimalsInput.value
        console.log(decimalsValue)
        chrome.storage.local.set({ decimals: decimalsValue })

        // display decimals
        const displayDecimalsInput = document.getElementById('displayDecimals')
        const displayDecimalsValue = displayDecimalsInput.value
        console.log(displayDecimalsValue)
        chrome.storage.local.set({ displayDecimals: displayDecimalsValue })
    })
})
