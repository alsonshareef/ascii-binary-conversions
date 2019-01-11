
// String => Ascii
exports.convertStringToAsciiCode = (word) => {
    let output = []
    for(let i = 0; i < word.length; i++){
        output.push(word.charCodeAt(i).toString())
    }
    return output
}


// Ascii => String
exports.convertAsciiCodeToString = (...ascii) => {
    let output = []
    for(let i = 0; i < ascii.length; i++){
        output.push(String.fromCharCode(ascii[i]))
    }
    return output
}


// Number => Binary
exports.convertNumberToBinary = (number) => {
    let index = Math.floor(Math.log2(number))
    let operator = Math.pow(2, index)
    let bin = ''
    let unused = 7 - index

    // This loop ensures that any unused criteria will have a '0' instead of no number, making the binary output always at least 8 numbers
    for (let j = 0; j < unused; j++) {
        bin += '0'
    }

    for (i = 0; i <= index; i++){
        if (number >= operator) {
            bin += '1'
            number -= operator
        } else {
            bin += '0'
        }
        operator /= 2
    }
    
    
    if (bin === '') {
       return '0' 
    } 

    return bin
}


// Binary => Byte Array
exports.convertBinarytoByteArray = (bin) => {
    let output = []
    let binArray = bin.split('')

    for(let i = 0; i <= binArray.length / 8; i++){
        if (binArray.length > 8) {
            let index = binArray.length - 8
            output.push(binArray.splice(index, 8).join(''))
            binArray = binArray.splice(0, index)
        } 
    }

    let size = 8 - binArray.length
    let binOut = binArray.join('')

    for(let i = 0; i < size; i++){
        binOut = '0' + binOut
    }

    output.push(binOut)

    return output.reverse()
}


// Binary => Number
exports.convertBinaryToNumber = (bin) => {
    let num = 0
    let operator = Math.pow(2, bin.length - 1)
    for(let i = 0; i < bin.length; i++){
        if (bin[i] === '1') {
            num += operator
        }
        operator /= 2
    }
    return num
}
