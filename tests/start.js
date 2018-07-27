const register = require('../index.js');

console.log(
    register.checkCash(process.argv[2],
                        process.argv[3],
                        process.argv[4])
);
