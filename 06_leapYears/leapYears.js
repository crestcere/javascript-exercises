const leapYears = function() {
    /*
    Take value
    Argument or variable
        if %4 == 0
            Make multiple values assigning to them
            true
        elseif %10 != 0
            false
        elseif %400 == 0
            true
    Return value
        true
        false
    */
   let a;
   let b;
   let c;
//    let d;
    if (arguments[0] % 4 == 0) {
        a = true;
    } else { a = false; }

    if (arguments[0] % 10 != 0) { b = true; }
    else { b = false; }

    if (arguments[0] % 400 == 0) { c = true; }
    else { c = false; }

    return a && b || c;
};

// Do not edit below this line
module.exports = leapYears;
