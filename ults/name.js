var random_name = require('node-random-name');

const getname =() => {
    return random_name();
}

exports.getname = getname
