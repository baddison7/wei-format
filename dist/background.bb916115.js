;(() => {
    var e = {},
        t = (e = {
            convertWei: function (e, t, i) {
                let l,
                    s,
                    c,
                    n = e.toString()
                return (
                    n.length > t
                        ? (',' ===
                              (l = (l = (l = n.substring(0, n.length - t))
                                  .split('')
                                  .reverse()
                                  .join('')).replace(/(\d{3})/g, '$1,')).slice(
                                  -1
                              ) && (l = l.slice(0, -1)),
                          (l = l.split('').reverse().join('')),
                          ',' ===
                              (s = (s = (s = n.substring(
                                  n.length - t,
                                  n.length
                              )).substring(0, i)).replace(
                                  /(\d{3})/g,
                                  '$1,'
                              )).slice(-1) && (s = s.slice(0, -1)),
                          '.' === (c = l + '.' + s).slice(-1) &&
                              (c = c.slice(0, -1)))
                        : (',' ===
                              (s = (s = (s = (s = n.substring(
                                  n.length - t,
                                  n.length
                              )).substring(0, i)).padStart(i, '0')).replace(
                                  /(\d{3})/g,
                                  '$1,'
                              )).slice(-1) && (s = s.slice(0, -1)),
                          '.' === (c = '0.' + s).slice(-1) &&
                              (c = c.slice(0, -1))),
                    c
                )
            },
            convertHex: function (e) {
                if (!e.match(/^(0x)?[0-9A-Fa-f]+$/))
                    throw Error('Invalid hexadecimal input')
                e.startsWith('0x') && (e = e.slice(2))
                let t = 0
                e = e.toUpperCase()
                for (let i = 0; i < e.length; i++) {
                    let l = '0123456789ABCDEF'.indexOf(e[i])
                    t = 16 * t + l
                }
                return t
            },
        }).convertWei,
        i = e.convertHex
    chrome.contextMenus.create({
        id: 'Wei to Eth',
        title: 'Wei to Eth',
        contexts: ['selection'],
    }),
        chrome.contextMenus.create({
            id: 'Hex Converter',
            title: 'Hex Converter',
            contexts: ['selection'],
        })
    let l = { decimals: 18, displayDecimals: 18 }
    chrome.storage.local.get(['decimals']).then((e) => {
        l.decimals = parseInt(e.decimals)
    }),
        chrome.storage.local.get(['displayDecimals']).then((e) => {
            l.displayDecimals = parseInt(e.displayDecimals)
        }),
        chrome.contextMenus.onClicked.addListener(function (e, i) {
            if ('Wei to Eth' === e.menuItemId) {
                let i = t(e.selectionText, l.decimals, l.displayDecimals)
                chrome.storage.local.set({ Str: i })
            }
        }),
        chrome.contextMenus.onClicked.addListener(function (e, s) {
            if ('Hex Converter' === e.menuItemId) {
                let s = t(i(e.selectionText), l.decimals, l.displayDecimals)
                chrome.storage.local.set({ Str: s })
            }
        })
})()