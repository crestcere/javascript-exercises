const removeFromArray = function() {
    /*
        Take string value as argument
            For loop argument[0], if you find string argument has equivalent in,
                Convert as argument
                if does not ignore value
    */

    // let c = -1;
    
    // for (let i = 1; i < arguments.length; i++) {
    //     if (Math.max(arguments[0]) < arguments[i]) { continue; }
    //     else if (typeof arguments[i] == "string") { continue; }
    //     arguments[0].splice(arguments[i] + c, 1);
    //     c--;
    // }
    // console.log(arguments[0]);
    // return arguments[0];  

    let a = arguments[0];

    let b = [];

    for (let i = 1; i < arguments.length; i++) {
        // if (typeof arguments[i] != "number") { continue; }
        // else { b.push(arguments[i]); }
        b.push(arguments[i]);
    }
    
    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < b.length; k++) {
            if (a[i] === b[k]) {
                delete a[i];
            }
        }
    }

    let d = a.filter(item => typeof item != undefined);

    console.log(d);
    return d;
}   
/*
    Find element in argument array that is string variable.
*/

// Do not edit below this line
module.exports = removeFromArray;
