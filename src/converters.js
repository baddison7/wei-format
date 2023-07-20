function convertWei(num, decimalsValue, displayDecimalsValue) {
    let str = num.toString()
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

    if (str.length > decimalsValue) {
        wholeDigets = str.substring(0, str.length - decimalsValue)

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
        smallDigets = str.substring(str.length - decimalsValue, str.length)
        //truncating digets
        smallDigets = smallDigets.substring(0, displayDecimalsValue)
        //
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
        smallDigets = str.substring(str.length - decimalsValue, str.length)
        //truncating digets
        smallDigets = smallDigets.substring(0, displayDecimalsValue)

        smallDigets = smallDigets.padStart(displayDecimalsValue, '0')

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

function convertHex(hex) {
    // Validate the input
    if (!hex.match(/^(0x)?[0-9A-Fa-f]+$/)) {
        throw new Error('Invalid hexadecimal input')
    }

    if (hex.startsWith('0x')) {
        hex = hex.slice(2)
    }

    // Convert the hexadecimal to decimal
    let decimal = 0
    const hexDigits = '0123456789ABCDEF'
    hex = hex.toUpperCase()

    for (let i = 0; i < hex.length; i++) {
        const digit = hexDigits.indexOf(hex[i])
        decimal = decimal * 16 + digit
    }

    return decimal
}

function converter(preConverted, decimalsValue, displayDecimalsValue, conversionType) {
    if ((conversionType = 'wei')) {
        const convertedStr = convertWei(preConverted, decimalsValue, displayDecimalsValue)
        return convertedStr
    } else if ((conversionType = 'hex')) {
        let convertedStr = convertHex(preConverted)
        convertedStr = convertWei(convertedStr, decimalsValue, displayDecimalsValue)
        return convertedStr
    }
}

module.exports = {
    converter,
}
