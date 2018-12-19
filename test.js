let {
    convertStringToAsciiCodeArray,
    convertAsciiCodeArrayToString,
    convertNumberToBinary,
    convertBinaryToNumber,
    convertBinarytoByteArray
} = require('./functions')


// **** UNIT TESTS **** //

// TEST function for String => Ascii



// TEST function for Ascii => String


// TEST function for Number => Binary
let testNumbertoBinary = () => {
    let testNumbers = [255, 0, 128, 64, 32, 16, 8, 4, 2, 1],
    expectedOutput = ['11111111', '0', '10000000', '1000000', '100000', '10000', '1000', '100', '10', '1']
    
    for(let i = 0; i < testNumbers.length; i++){
        if(convertNumberToBinary(testNumbers[i]) === expectedOutput[i]){
            console.log(`** PASSED ** The returned value from 'Number to Binary' function is EQUAL to expected output`)
        } else {
            console.log(`** FAILED ** The returned value from 'Number to Binary' function is NOT EQUAL to expected output`)
        }
    }
}

testNumbertoBinary()

// TEST function for Binary => Number


// TEST Binary to Byte Array



// **** INTEGRATION TESTS **** //