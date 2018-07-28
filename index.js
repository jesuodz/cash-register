const register = {};

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

    return output;
}

module.exports = register;