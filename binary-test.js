let binaryConverter = (number) => {
    let index = Math.floor(Math.log2(number))
    let operator = Math.pow(2, index)
    let bin = ''
    let result = []

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

console.log(binaryConverter(65))

// PROBLEM: not adding a zero to represent unused binary number criteria (e.g. 128, 64)