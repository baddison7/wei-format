document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get(["Eth"]).then((result) => {
        convertedEth = result.Eth
        const text = (document.getElementById("Eth").textContent = `Eth: ${convertedEth}`)
    })

    chrome.storage.local.get(["Hex"]).then((result) => {
        convertedHex = result.Hex
        const text = (document.getElementById("Hex").textContent = `Hex: ${convertedHex}`)
    })
})

//add titles
//add icon
//open popup
//round numbers
//pick the truncation