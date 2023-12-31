const { converter } = require('../src/converters')

describe('WEI Formatter', () => {
    test('large wei numbers', () => {
        expect(converter('1234567890123456789', 18, 18, 'wei')).toEqual('1.234,567,890,123,456,789')
        expect(converter('1234567890123456789', 18, 0, 'wei')).toEqual('1')
        expect(converter('1234567890123456789', 18, 1, 'wei')).toEqual('1.2')
        expect(converter('1234567890123456789', 18, 2, 'wei')).toEqual('1.23')
        expect(converter('1234567', 6, 0, 'wei')).toEqual('1')
        expect(converter('1234567', 6, 2, 'wei')).toEqual('1.23')
        expect(converter('1234567', 6, 6, 'wei')).toEqual('1.234,567')
        expect(converter('12345678901234567898', 18, 0, 'wei')).toEqual('12')
        expect(converter('12345678901234567898', 18, 2, 'wei')).toEqual('12.34')
        expect(converter('12345678901234567898', 18, 4, 'wei')).toEqual('12.345,6')
        expect(converter('123456789012345678987', 18, 2, 'wei')).toEqual('123.45')
        expect(converter('1234567890123456789876', 18, 0, 'wei')).toEqual('1,234')
        expect(converter('1234567890123456789876', 18, 4, 'wei')).toEqual('1,234.567,8')
        expect(converter('12345678901234567898765', 18, 0, 'wei')).toEqual('12,345')
        expect(converter('12345678901234567898765', 18, 4, 'wei')).toEqual('12,345.678,9')
        expect(converter('175307326341362540000000', 18, 18, 'wei')).toEqual(
            '175,307.326,341,362,540,000,000'
        )
    })
    test('small wei numbers', () => {
        expect(converter('1', 18, 18, 'wei')).toEqual('0.000,000,000,000,000,001')
        expect(converter('1', 17, 17, 'wei')).toEqual('0.000,000,000,000,000,01')
        expect(converter('1', 16, 16, 'wei')).toEqual('0.000,000,000,000,000,1')
        expect(converter('1', 15, 15, 'wei')).toEqual('0.000,000,000,000,001')
        expect(converter('1', 2, 2, 'wei')).toEqual('0.01')
        expect(converter('1', 0, 0, 'wei')).toEqual('1')
        expect(converter('100', 0, 0, 'wei')).toEqual('100')
        expect(converter('1000000', 4, 4, 'wei')).toEqual('100.000,0')
        expect(converter('123', 18, 18, 'wei')).toEqual('0.000,000,000,000,000,123')
        expect(converter('1234', 18, 18, 'wei')).toEqual('0.000,000,000,000,001,234')
        expect(converter('987654321', 18, 18, 'wei')).toEqual('0.000,000,000,987,654,321')
    })
    test('edge cases', () => {
        expect(converter('0', 18, 17, 'wei')).toEqual('0.000,000,000,000,000,00')
        expect(converter('0', 18, 1, 'wei')).toEqual('0.0')
        expect(converter('0', 18, 4, 'wei')).toEqual('0.000,0')
        expect(converter('1', 0, 2, 'wei')).toEqual('1')
    })
    test('large negitive numbers', () => {
        expect(converter('-1234567890123456789', 18, 18, 'wei')).toEqual(
            '-1.234,567,890,123,456,789'
        )
        expect(converter('-1234567890123456789', 18, 0, 'wei')).toEqual('-1')
        expect(converter('-1234567890123456789', 18, 1, 'wei')).toEqual('-1.2')
        expect(converter('-1234567890123456789', 18, 2, 'wei')).toEqual('-1.23')
        expect(converter('-1234567', 6, 0, 'wei')).toEqual('-1')
        expect(converter('-1234567', 6, 2, 'wei')).toEqual('-1.23')
        expect(converter('-1234567', 6, 6, 'wei')).toEqual('-1.234,567')
        expect(converter('-12345678901234567898', 18, 0, 'wei')).toEqual('-12')
        expect(converter('-12345678901234567898', 18, 2, 'wei')).toEqual('-12.34')
        expect(converter('-12345678901234567898', 18, 4, 'wei')).toEqual('-12.345,6')
        expect(converter('-123456789012345678987', 18, 2, 'wei')).toEqual('-123.45')
        expect(converter('-1234567890123456789876', 18, 0, 'wei')).toEqual('-1,234')
        expect(converter('-1234567890123456789876', 18, 4, 'wei')).toEqual('-1,234.567,8')
        expect(converter('-12345678901234567898765', 18, 0, 'wei')).toEqual('-12,345')
        expect(converter('-12345678901234567898765', 18, 4, 'wei')).toEqual('-12,345.678,9')
    })
    test('small negitve numbers', () => {
        expect(converter('-1', 18, 18, 'wei')).toEqual('-0.000,000,000,000,000,001')
        expect(converter('-1', 17, 17, 'wei')).toEqual('-0.000,000,000,000,000,01')
        expect(converter('-1', 16, 16, 'wei')).toEqual('-0.000,000,000,000,000,1')
        expect(converter('-1', 15, 15, 'wei')).toEqual('-0.000,000,000,000,001')
        expect(converter('-1', 2, 2, 'wei')).toEqual('-0.01')
        expect(converter('-1', 0, 0, 'wei')).toEqual('-1')
        expect(converter('-100', 0, 0, 'wei')).toEqual('-100')
        expect(converter('-1000000', 4, 4, 'wei')).toEqual('-100.000,0')
        expect(converter('-123', 18, 18, 'wei')).toEqual('-0.000,000,000,000,000,123')
        expect(converter('-1234', 18, 18, 'wei')).toEqual('-0.000,000,000,000,001,234')
        expect(converter('-987654321', 18, 18, 'wei')).toEqual('-0.000,000,000,987,654,321')
    })
    test('hexedecimal', () => {
        //expect(converter('10029ee0121f8dec22679987978', 0, 0, 'hex')).toEqual(
        //    '20,295,386,218,748,455,875,047,348,271,480'
        //)
        // expect(converter('DE0B6B3A7640000', 0, 0, 'hex')).toEqual('1,000,000,000,000,000,000')
        /*expect(converter('251f6de049726a02b300', 0, 0, 'hex')).toEqual(
            '175,307,326,341,362,540,000,000'
        )*/
        // expect(parseInt('251f6de049726a02b300n', 16)).toEqual('175307326341362540000000')
    })
})
