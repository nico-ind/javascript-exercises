const removeFromArray = function(inputArray, ...removedNumbers) {
    
    let outputArray = [];

    for (const inputArrayELement of inputArray) {
        
        if (removedNumbers.includes(inputArrayELement)) {
            continue
            
        } else {
            outputArray.push(inputArrayELement);
        }
        
    }

    return outputArray
};

// Do not edit below this line
module.exports = removeFromArray;
