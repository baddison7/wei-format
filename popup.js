document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get(["Str"]).then((result) => {
        storedStr = result.Str
        const text = (document.getElementById("Eth").textContent = `${storedStr}`)
    })
})

//add icon
//open popup