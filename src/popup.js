document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get(["Str"]).then((result) => {
        storedStr = result.Str
        alert(storedStr)
        console.log(storedStr)
        const text = (document.getElementById(
            "Eth"
        ).textContent = `${storedStr}`)
    })

    const form = document.getElementById("decimalsForm")

    form.addEventListener("submit", function (event) {
        event.preventDefault() // Prevent the default form submission

        // decimals
        const decimalsNameInput = document.getElementById("decimals")
        const decimalsNameValue = decimalsNameInput.value
        chrome.storage.local.set({ decimals: decimalsNameValue })

        // display decimals
        const displayDecimalsNameInput =
            document.getElementById("displayDecimals")
        const displayDecimalsNameValue = displayDecimalsNameInput.value
        chrome.storage.local.set({ displayDecimals: displayDecimalsNameValue })
    })
})

//add icon
//open popup
