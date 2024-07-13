const reverseString = function(word) {
    let reversed = [];
    
    for (const letter of word) {
        reversed.unshift(letter);
    }

    return reversed.join('')
};

// Do not edit below this line
module.exports = reverseString;
