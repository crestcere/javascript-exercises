const ftoc = function() {

  /*
    Take value
    Add (F -32) x 5 / 9
    Make round
      Math.toFixed(1)
    Return Value  
  */

    let a = arguments[0];
    a = (a - 32) * 5 / 9;
    a = +a.toFixed(1);
    return a;

};

const ctof = function() {

  /*
    Take value
    Add C * 9 / 5 + 32
    Make round
    Return value
  */

    let a = arguments[0];
    a = a * 9 / 5 + 32;
    a = +a.toFixed(1);
    return a;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
