let {
    convertStringToAsciiCode,
    convertAsciiCodeToString,
    convertNumberToBinary,
    convertBinaryToNumber,
    convertBinarytoByteArray
} = require('./functions')


// **** UNIT TESTS **** //

// TEST function for String => Ascii
    let testStringtoAscii = () => {
        let testString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let expectedOutput = [ '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90' ]

        for(let i = 0; i < testString.length; i++){
            if (convertStringToAsciiCode(testString[i]).toString() === expectedOutput[i]){
                console.log(`** PASSED ** The returned value from 'String to Ascii' function is EQUAL to expected output`)
            } else {
                console.log(`** FAILED ** The returned value from 'String to Ascii' function is NOT EQUAL to expected output`)
            }
        }
    }

// testStringtoAscii()


// TEST function for Ascii => String


// TEST function for Number => Binary
    let testNumbertoBinary = () => {
        let testNumbers = [255, 0, 128, 64, 32, 16, 8, 4, 2, 1],
        expectedOutput = ['11111111', '0', '10000000', '1000000', '100000', '10000', '1000', '100', '10', '1']
        
        for(let i = 0; i < testNumbers.length; i++){
            if (convertNumberToBinary(testNumbers[i]) === expectedOutput[i]){
                console.log(`** PASSED ** The returned value from 'Number to Binary' function is EQUAL to expected output`)
            } else {
                console.log(`** FAILED ** The returned value from 'Number to Binary' function is NOT EQUAL to expected output`)
            }
        }
    }

// testNumbertoBinary()


// TEST Binary to Byte Array
let testBinarytoByteArray = () => {
    let testBinaryNumbers = ['00000000000000000000', '10000000000000011000', '11000000000000111100', '11100000000001111110', '11110000000011111111', '11111000000111111111', '10101010101010101010'],

    expectedOutput = [[ '00000000', '00000000', '00000000' ], [ '00001000', '00000000', '00011000' ], [ '00001100', '00000000', '00111100' ], [ '00001110', '00000000', '01111110' ], [ '00001111', '00000000', '11111111' ], [ '00001111', '10000001', '11111111' ], [ '00001010', '10101010', '10101010' ]]

    for(let i = 0; i < testBinaryNumbers.length; i++){
        if (convertBinarytoByteArray(testBinaryNumbers[i]).toString() === expectedOutput[i].toString()) {
            console.log(`** PASSED ** The returned value from 'Binary to Byte Array' function is EQUAL to expected output`)
        } else {
            console.log(`** FAILED ** The returned value from 'Binary to Byte Array' function is NOT EQUAL to expected output`)
        }
    }
}

testBinarytoByteArray()


// TEST Binary => Number 
let testBinarytoNumber = () => {
    let testBinaryNumbers = ['11111111', '0', '10000000', '1000000', '100000', '10000', '1000', '100', '10', '1'],
    expectedOutput = [255, 0, 128, 64, 32, 16, 8, 4, 2, 1]

    for(let i = 0; i < testBinaryNumbers.length; i++){
        if (convertBinaryToNumber(testBinaryNumbers[i]) === expectedOutput[i]) {
            console.log(`** PASSED ** The returned value from 'Binary to Number' function is EQUAL to expected output`)
        } else {
            console.log(`** FAILED ** The returned value from 'Binary to Number' function is NOT EQUAL to expected output`)
        }
    }
}

// testBinarytoNumber()



// **** INTEGRATION TESTS **** //