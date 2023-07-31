function convertWei(num, decimals, displayDecimals) {
    let str = BigInt(num).toString()
    let wholeDigets
    let smallDigets
    let formattedNumb
    let negitive

    if (str.charAt(0) === '-') {
        str = str.substring(1)
        negitive = true
    } else {
        negitive = false
    }

    if (str.length > decimals) {
        wholeDigets = str.substring(0, str.length - decimals)

        // Reverse the string for easier manipulation
        wholeDigets = wholeDigets.split('').reverse().join('')

        // Insert commas after every three characters
        wholeDigets = wholeDigets.replace(/(\d{3})/g, '$1,')

        // Remove trailing comma if present
        if (wholeDigets.slice(-1) === ',') {
            wholeDigets = wholeDigets.slice(0, -1)
        }

        // Reverse the string back to its original order
        wholeDigets = wholeDigets.split('').reverse().join('')

        // selects only the deciamls
        smallDigets = str.substring(str.length - decimals, str.length)
        //truncating digets
        smallDigets = smallDigets.substring(0, displayDecimals)
        // Insert commas after every three characters
        smallDigets = smallDigets.replace(/(\d{3})/g, '$1,')

        // Remove trailing comma if present
        if (smallDigets.slice(-1) === ',') {
            smallDigets = smallDigets.slice(0, -1)
        }

        formattedNumb = wholeDigets + '.' + smallDigets

        // Adds negitives back in
        if (negitive == true) {
            formattedNumb = '-' + formattedNumb
        }

        // Remove trailing comma if present
        if (formattedNumb.slice(-1) === '.') {
            formattedNumb = formattedNumb.slice(0, -1)
        }

        return formattedNumb
    } else {
        // selects only the deciamls
        smallDigets = str.substring(str.length - decimals, str.length)
        //truncating digets
        smallDigets = smallDigets.substring(0, displayDecimals)

        smallDigets = smallDigets.padStart(displayDecimals, '0')

        // Insert commas after every three characters
        smallDigets = smallDigets.replace(/(\d{3})/g, '$1,')

        // Remove trailing comma if present
        if (smallDigets.slice(-1) === ',') {
            smallDigets = smallDigets.slice(0, -1)
        }

        formattedNumb = '0.' + smallDigets

        // Adds negitives back in
        if (negitive == true) {
            formattedNumb = '-' + formattedNumb
        }

        // Remove trailing comma if present
        if (formattedNumb.slice(-1) === '.') {
            formattedNumb = formattedNumb.slice(0, -1)
        }

        return formattedNumb
    }
}
function convertHex(preConverted) {
    let convertedStr = preConverted
    if (preConverted.length % 2) {
        convertedStr = '0' + preConverted
    }
    convertedStr = BigInt('0x' + convertedStr)
    return convertedStr
}

function convertUnix(preConverted) {
    const timeInMills = preConverted * 1000 // convert to mili
    let currentTimeZone = new Date(timeInMills) // convert new time
    const UTC = currentTimeZone.toUTCString()

    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    }
    currentTimeZone = currentTimeZone.toLocaleDateString('en-GB', options)

    return {
        currentTimeZone,
        UTC,
    }
}

module.exports = {
    convertWei,
    convertHex,
    convertUnix,
}
