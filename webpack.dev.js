const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        liveReload: true,
        port: 8080,
        static: './dist',
        compress: true,
        server: 'https',
        hot: true
    },
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ]
});