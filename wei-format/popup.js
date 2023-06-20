document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get(["key"]).then((result) => {
        console.log("Value currently is " + result.key);
        cutString = result.key

        const text = document.getElementById('blankText').textContent = cutString
        console.log(cutString)
    });
});