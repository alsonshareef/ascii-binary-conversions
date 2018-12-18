
// String => Ascii
let convertStringToAsciiCodeArray = (word) => {
    let output = []
    for(let i = 0; i < word.length; i++){
        output.push(word.charCodeAt(i).toString())
    }
    return output
}

// console.log(convertStringToAsciiCodeArray('Alson'))


// Ascii => String
let convertAsciiCodeArrayToString = () => {

}


// Number => Binary
let convertNumberToBinary = (number) => {
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

console.log(convertNumberToBinary(140))

// Binary => Number
let convertBinaryToNumber = () => {

}