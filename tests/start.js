const register = require('../index.js');

console.log(
    register.checkCash(process.argv[2],
                        process.argv[3],
                        Array.prototype.slice.call(process.argv[4]))
);
