
// ** THIS FILE WAS USED TO DEBUG functions

let convertNumbertoBinary = (number) => {
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

// console.log(convertNumbertoBinary(12))

let convertBinarytoByteArray = (bin) => {
    let output = []
    let binArray = bin.split('')
    let iterations = binArray.length // Added this variable because binArray was being mutated and affecting the amount of iterations of the loop

    for(let i = 0; i <= iterations / 8; i++){
        if (binArray.length > 8) {
            let index = binArray.length - 8
            output.push(binArray.splice(index, 8).join(''))
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

console.log(convertBinarytoByteArray('0100000101101100011100110110111101101110'))