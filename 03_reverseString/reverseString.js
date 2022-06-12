const reverseString = function(string) {
    let a = string.length - 1;
    let i = 0;
    let string2 = "";
    while (a - i != -1) {
        string2 += string[a - i];
        i++;
    }
    return string2;
};

/*
    Take string input
    Convert string input to array
        or use charAt() method to do it.
    Make a loop 
        Return array to string backwards
*/

// Do not edit below this line
module.exports = reverseString;
