document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get(['Str']).then((e) => {
        ;(storedStr = e.Str),
            alert(storedStr),
            console.log(storedStr),
            (document.getElementById('Eth').textContent = `${storedStr}`)
    })
    let e = document.getElementById('decimalsForm')
    e.addEventListener('submit', function (e) {
        e.preventDefault()
        let t = document.getElementById('decimals'),
            o = t.value
        chrome.storage.local.set({ decimals: o })
        let l = document.getElementById('displayDecimals'),
            d = l.value
        chrome.storage.local.set({ displayDecimals: d })
    })
})
