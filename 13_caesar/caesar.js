const caesar = function() {
    let a = arguments[0];
    let b = [];
    let c = [];
    let d = [];
    let e = arguments[1];
    e = e % 26;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == '!' || a[i] == ',' || a[i] == ' ') { b.push(a[i]); }
        else { b.push(a.charCodeAt(i)); }
        // switch (a[i]) {
        //     case '!':
        //         continue outer;
        //     case ',':
        //         continue outer;
        //     case ' ':
        //         continue outer;
        //     default:
        //         b.push(a.charCodeAt(i));
        // }
        //  
    }
    for (let i = 0; i < b.length; i++) {
        if (typeof b[i] == 'string') { c[i] = b[i]; }
        else if (e < 0) {
            if (b[i] + e <= 64 && b[i] <= 90) {
                c[i] = ((b[i] + e) - 65) + 91;
                // console.log("-1. if: " + c[i]);
            } 
            else if (b[i] <= 122 && b[i] + e > 122) {
                c[i] = ((b[i] + e) - 97) + 122;
                // console.log("-2. if: " + c[i]);
            }
            else { c[i] = b[i] + e; }
        } else {
            if (b[i] + e > 90 && b[i] <= 90) {
                c[i] = ((b[i] + e) % 90) + 64;
                // console.log("+1. if: " + c[i]);
            } 
            else if (b[i] <= 122 && b[i] + e > 122) {
                c[i] = ((b[i] + e) % 122) + 96;
                // console.log("+2. if: " + c[i]);
            }
            else { c[i] = b[i] + e; }
        }
        // else if (b[i] + e > 90 && b[i] <= 90) {
        //     c[i] = ((b[i] + e) % 90) + 64;
        // }
        // else if (b[i] <= 122 && b[i] + e > 122) {
        //     c[i] = ((b[i] + e) % 122) + 96;
        // }
        // else { c[i] = b[i] + e; }
    }
    // for (let i = 0; i < c.length; i++) {
    //     if (c[i] > 90 && c[i] <= 97) {
    //         c[i] == 65 + (c[i] % 90)
    //     }
    //     else if (c[i] >= 97 && )
    // }
    for (let i = 0; i < c.length; i++) {
        if (typeof b[i] == 'string') { d[i] = c[i]; }
        else { d[i] = String.fromCharCode(c[i]); }
    }
    // console.log("b: " + b);
    // console.log("c: " + c);
    // console.log("d: " + d);
    // console.log("e" + e);
    return d.join('');
};

// Do not edit below this line
module.exports = caesar;
