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

module.exports = {
    converter,
}

function converter(preConverted, decimalsValue, displayDecimalsValue, conversionType) {
    if (conversionType === 'hex') {
        let convertedStr
        if (preConverted.length % 2) {
            convertedStr = '0' + preConverted
        }
        convertedStr = BigInt('0x' + convertedStr)
        return convertedStr
    } else {
        let convertedStr = BigInt(preConverted)
        convertedStr = convertWei(preConverted, decimalsValue, displayDecimalsValue)
        return convertedStr
    }
}
