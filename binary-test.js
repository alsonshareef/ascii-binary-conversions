
// ** THIS FILE WAS USED TO DEBUG convertNumbertoBinary

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

console.log(convertNumbertoBinary(12))