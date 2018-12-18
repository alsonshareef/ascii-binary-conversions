
// String => Ascii
exports.convertStringToAsciiCodeArray = (word) => {
    let output = []
    for(let i = 0; i < word.length; i++){
        output.push(`${word[i]}: ` + word.charCodeAt(i).toString())
    }
    return output
}


// Ascii => String
exports.convertAsciiCodeArrayToString = () => {

}


// Number => Binary
exports.convertNumberToBinary = (number) => {
    let operator = 128
    let bin = ''
    for (i = 0; i <= 7; i++){
        if (number >= operator) {
            bin += '1'
            number -= operator
        } else {
            bin += '0'
        }
        operator /= 2
    }
    return `The binary code is: ${bin}`
}


// Binary => Number
exports.convertBinaryToNumber = () => {

}