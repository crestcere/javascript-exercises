const add = function() {
    /*
        Two arguments
    */
    return arguments[0] + arguments[1];   
};

const subtract = function() {
    return arguments[0] - arguments[1];
};

const sum = function() {
    let a = 0;
    let b = arguments[0];
    for (let i = 0; i < b.length; i++) {
        a += b[i];
    }
    return a;
};

const multiply = function() {
    let a = arguments[0];
    let b = 1;
    for (let i = 0; i < a.length; i++) {
         b *= a[i];
    }
    return b;
};

const power = function() {
    let a = 1;
    for (let i = 0; i < arguments[1]; i++) {
        a *= arguments[0];
    }
    return a;
};

const factorial = function() {
    let a = 1;
    for (let i = arguments[0]; i > 0; i--) {
        a *= i;
    }
    return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
