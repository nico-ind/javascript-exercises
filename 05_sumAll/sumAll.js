const sumAll = function(num1, num2) {
    
    let numbers = [num1, num2];

    let finalSum = 0;

    // Ordenar de menor a mayor 
    numbers.sort(function(a, b){return a-b});

    // // Verificar que el input sea del tipo entero positivo
    if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
        return 'ERROR';
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else {
        for (let i=numbers[0]; i<numbers[1]+1; i++) {
            finalSum += i; 
        }
    }

    return finalSum

};

// Do not edit below this line
module.exports = sumAll;
