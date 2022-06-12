const fibonacci = function() {
    /*
    Take argument
    Make array for basic series
    Loop array to find nth index
    Return founded index
    */
   let a = [1, 1, 2, 3];
   arguments[0] = +arguments[0];
   if (arguments[0] < 0) {
        return "OOPS";
   } else if (arguments[0] < 4) {
        return a[arguments[0] - 1];
   } else {
        for (let i = 4; i < arguments[0]; i++) {
            a.push(a[i - 1] + a[i - 2]);
        }
        return a[arguments[0] - 1];
   }
   
};

// Do not edit below this line
module.exports = fibonacci;
