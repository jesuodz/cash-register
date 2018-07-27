const register = {};

register.checkCash = function (price, cash, cid) {
    let isEnough = (price >= cash) ? true : false;
    let obj = {};

    if (!isEnough) {
        obj.status = 'INSUFFICIENT_FUNDS';
        obj.change = [];
    }

    return obj;
}

module.exports = register;