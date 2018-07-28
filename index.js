const register = {};

var units = [
    {name: 'ONE HUNDRED', value: 100.00},
    {name: 'TWENTY', value: 20.00},
    {name: 'TEN', value: 10.00},
    {name: 'FIVE', value: 5.00},
    {name: 'ONE', value: 1.00},
    {name: 'QUARTER', value: 0.25},
    {name: 'DIME', value: 0.10},
    {name: 'NICKEL', value: 0.05},
    {name: 'PENNY', value: 0.01}
];
  
register.checkCash = (price, cash, cid) => {
    let output = { change: [] };
    let changeDue = cash - price;

    // What's in my register
    let registerTotal = cid.reduce( (accum, curr) => {
        accum += curr[1];
        return accum;
    }, 0);

    // Register is empty
    if (registerTotal === changeDue) {
      output.status = 'CLOSED';
      output.change = cid;
      return output;
    }

    // Can't afford a simple change
    if (registerTotal < changeDue) {
        output.status = 'INSUFFICIENT_FUNDS';
        output.change = [];
        return output;
    }

    let registerUnits = cid.reduce( (accum, curr) => {
        accum[curr[0]] = curr[1];
        return accum;
    }, {});

    // Unfinished
    // let changeArr = units.map((obj) => {
    //     var value = 0;

    //     for (var index = 0; index < cid.length; index++) {
    //         if (cid[index][0] == obj.name && changeDue >= obj.value) {
    //             changeDue =- obj.value;
    //             cid[index] -= obj.value;
    //             value += obj.value;

    //             changeDue = Math.round(changeDue * 100) / 100;
    //         }
    //     }

    //     if (value > 0) {
    //         return [obj.name, value];
    //     }
    // });

    let changeArr = units.reduce((acc,curr) => {
        var value = 0;

        while (registerUnits[curr.name] > 0 && changeDue >= curr.value) {
            changeDue -= curr.value;
            registerUnits[curr.name] -= curr.value;
            value += curr.value;

            changeDue = Math.round(changeDue * 100) / 100;
        }
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc;
    }, []);

    if (changeArr.length < 1 || changeDue > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
    // Here is your change, ma'am.
    output.status = 'OPEN';
    output.change = changeArr;
    return output;
}

module.exports = register;