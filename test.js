let {
    convertStringToAsciiCodeArray,
    convertAsciiCodeArrayToString,
    convertNumberToBinary,
    convertBinaryToNumber
} = require('./functions')



// TEST function for String => Ascii


// TEST function for Ascii => String


// TEST function for Number => Binary
let testNumbers = [255, 0, 128, 64, 32, 16, 8, 4, 2, 1]
let expectedOutput = ['11111111', '00000000', '10000000', '01000000', '00100000', '00010000', '00001000', '00000100', '00000010', '00000001']

for(let i = 0; i < testNumbers.length; i++){
    if(convertNumberToBinary(testNumbers[i]) === expectedOutput[i]){
        console.log('** PASSED **')
    } else {
        console.log('** FAILED **')
    }
}


// TEST function for Binary => Number