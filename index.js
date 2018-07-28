const register = {};

register.checkCash = (price, cash, cid) => {
    var output = { change: [] };
    var changeDue = cash - price;

    // What's in my register
    var total = cid.reduce( (accum, currVal) => {
        accum += currVal[1];
        return accum;
    }, 0);

    // Register is empty
    if (total === changeDue) {
      output.status = 'CLOSED';
      output.changeDue = cid;
      return output;
    }

    if (!isEnough) {
        obj.status = 'INSUFFICIENT_FUNDS';
        obj.change = [];
    }

    return output;
}

module.exports = register;