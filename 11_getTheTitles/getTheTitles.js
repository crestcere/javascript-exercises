const getTheTitles = function() {
    let a = arguments[0];
    let b = [];
    for (let i = 0; i < a.length; i++) {
        b.push(a[i].title);
    }
    return b;
};

// Do not edit below this line
module.exports = getTheTitles;
