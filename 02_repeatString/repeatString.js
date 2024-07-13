const repeatString = function(string, number) {
    let repeatedString = '';
    if (number >= 0){
        for (i=0; i<number; i++) {
            repeatedString = repeatedString.concat(string);
        }
    } else {
        repeatedString = 'ERROR';
    }   

    return (repeatedString);
};

// Do not edit below this line
module.exports = repeatString;
