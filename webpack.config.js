var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./src/js/frontpress.esm.js"),
    output: {
        path: path.resolve(__dirname, "."),
        filename: './release/frontpress.es6.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    }
};
