const palindromes = function () {
    let a = arguments[0];
    let b = '';
    let c = '';
    a = a.toLowerCase();
    a = a.replaceAll('!', '');
    a = a.replaceAll(' ', '');
    a = a.replaceAll(',', '');
    a = a.replaceAll('.', '');
    console.log(a);
    for (let i = 0; i < a.length; i++) {
        b += a[i];
    }
    for (let i = a.length - 1; i >= 0; i--) {
        c += a[i];
    }
    console.log("b: " + b);
    console.log("c: " + c);
    if (b == c) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
