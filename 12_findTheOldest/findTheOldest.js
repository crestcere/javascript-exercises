const findTheOldest = function() {
    let a = arguments[0];
    let oldest = 0;
    let ages = [];
    const d = new Date();
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i].yearOfDeath != "number") {
            a[i].yearOfDeath = d.getFullYear();
            ages.push(a[i].yearOfDeath - a[i].yearOfBirth);
        } else {
            ages.push(a[i].yearOfDeath - a[i].yearOfBirth);
        }
    }
    console.log(ages);
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > oldest) {
            oldest = ages[i];
        } else { continue; }
    }
    console.log(oldest);
    let aa = ages.indexOf(oldest);
    return a[aa];
};

/* const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  findTheOldest(people).name */

// Do not edit below this line
module.exports = findTheOldest;
