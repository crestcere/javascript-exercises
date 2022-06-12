const repeatString = function(string, num) {
    /* 
    Take argument
        Create string
    Repeat several times
        For or while loop
    Return
        Return String
    */
    let string1 = "";
    let a = 0;

    do {
        string1 += string;
        a++;
    } while (a < num);

    if (num < 0) {
        return "ERROR";
    } 
    else if (num == 0) {
        return "";
    }
    else if (string.length == 0) {
        return "";
    }
    else {
        return string1;
    }
};

// Do not edit below this line
module.exports = repeatString;
