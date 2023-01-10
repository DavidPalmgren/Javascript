const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
    return {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: `./${env.kmom}/js/main.js`,
        plugins: [
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
        ],
        output: {
            filename: 'bundle.js',
            /* eslint-disable node/no-path-concat */
            path: path.resolve(`${__dirname}/${env.kmom}`, 'dist')
        }
    };
};
