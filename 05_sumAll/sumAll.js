const sumAll = function() {
    let min;
    let max;

    if (arguments[0] < arguments[1]) { 
        min = arguments[0];
        max = arguments[1];
    } else {
        min = arguments[1];
        max = arguments[0];
    }

    let total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }

    console.log(total);
    if (total < 0) {
        return "ERROR";
    } else if (typeof arguments[0] != "number" || typeof arguments[1] != "number") {
        return "ERROR";
    }
     else {
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
