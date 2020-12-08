const path = require('path');

module.exports = [
    "eval",
    "eval-cheap-source-map",
    "eval-cheap-module-source-map",
    "eval-source-map",
    "cheap-source-map",
    "cheap-module-source-map",
    "inline-cheap-source-map",
    "inline-cheap-module-source-map",
    "source-map",
    "inline-source-map",
    "hidden-source-map",
    "nosources-source-map"
].map(devtool => ({
    mode: "development",
    entry: './js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'trueJs'),
    },
    devServer: {
        overlay: true,
        contentBase: './trueJS',
    }

}));