var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./src/js/frontpress.esm.js"),
    output: {
        path: path.resolve(__dirname, "."),
        filename: 'frontpress-es6.js',
    }
};
