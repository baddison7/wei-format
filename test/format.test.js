const { convertHex, convertWei } = require("../src/converters")

describe("WEI Formatter", () => {
    test("large wei numbers", () => {
        expect(convertWei("1234567890123456789", 18, 18)).toEqual(
            "1.234,567,890,123,456,789"
        )
        expect(convertWei("1234567890123456789", 18, 0)).toEqual("1")
        expect(convertWei("1234567890123456789", 18, 1)).toEqual("1.2")
        expect(convertWei("1234567890123456789", 18, 2)).toEqual("1.23")
        expect(convertWei("1234567", 6, 0)).toEqual("1")
        expect(convertWei("1234567", 6, 2)).toEqual("1.23")
        expect(convertWei("1234567", 6, 6)).toEqual("1.234,567")
        expect(convertWei("12345678901234567898", 18, 0)).toEqual("12")
        expect(convertWei("12345678901234567898", 18, 2)).toEqual("12.34")
        expect(convertWei("12345678901234567898", 18, 4)).toEqual("12.345,6")
        expect(convertWei("123456789012345678987", 18, 2)).toEqual("123.45")
        expect(convertWei("1234567890123456789876", 18, 0)).toEqual("1,234")
        expect(convertWei("1234567890123456789876", 18, 4)).toEqual(
            "1,234.567,8"
        )
        expect(convertWei("12345678901234567898765", 18, 0)).toEqual("12,345")
        expect(convertWei("12345678901234567898765", 18, 4)).toEqual(
            "12,345.678,9"
        )
    })
    test("small wei numbers", () => {
        expect(convertWei("1", 18, 18)).toEqual("0.000,000,000,000,000,001")
        expect(convertWei("1", 17, 17)).toEqual("0.000,000,000,000,000,01")
        expect(convertWei("1", 16, 16)).toEqual("0.000,000,000,000,000,1")
        expect(convertWei("1", 15, 15)).toEqual("0.000,000,000,000,001")
        expect(convertWei("1", 2, 2)).toEqual("0.01")
        expect(convertWei("1", 0, 0)).toEqual("1")
        expect(convertWei("100", 0, 0)).toEqual("100")
        expect(convertWei("1000000", 4, 4)).toEqual("100.000,0")
        expect(convertWei("123", 18, 18)).toEqual("0.000,000,000,000,000,123")
        expect(convertWei("1234", 18, 18)).toEqual("0.000,000,000,000,001,234")
        expect(convertWei("987654321", 18, 18)).toEqual(
            "0.000,000,000,987,654,321"
        )
    })
    test("edge cases", () => {
        expect(convertWei("0", 18, 17)).toEqual("0.000,000,000,000,000,00")
        expect(convertWei("0", 18, 1)).toEqual("0.0")
        expect(convertWei("0", 18, 4)).toEqual("0.000,0")
        expect(convertWei("1", 0, 2)).toEqual("1")
    })
})
