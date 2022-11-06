const repeatString = function(string, num) {
    newString = []
    while (num > 0){
        newString.push(string)
        num -= 1
    }
    finalString = newString.join('')
    return finalString
};

// Do not edit below this line
module.exports = repeatString;
