const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js', // contenthash is used for adding hash to bundle name for browser cash
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        // if you don't need specified rule for cleaning folders, and it is enough default settings for you (clean dist)
        // clean: true,

        // clean: {
        //     dry: true, // if dry is true webpack tell you wich files was deleted and which was kept
        //     keep: /\.css/, // defines which files should be kept even you've made changes
        // }
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 3 kb
                    }
                },
            },
            {
                test: /\.txt$/,
                type: 'asset/source',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ],
                    },
                }
            }
        ],
    },
    plugins: [
        new TerserPlugin(), // plugin which decrease size of bundle.js
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }), // plugin which split your bundle.js to bundle.js and style.css
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Andrew pussy',
            filename: './andrew_pussy.html',
            meta: {
                description: 'Everything about Andry',
            },
        }), // create html automaticly

        // example of custom settings
        // new CleanWebpackPlugin({
        //     cleanOnceBeforeBuildPatterns: [
        //         '**/*', // means that webpack will remove all files in directory together with subdirectories
        //         path.join(process.cwd(), 'build/**/*'),
        //     ],
        // }), // clean output path (folder dist) before creating new bundle
    ],
};
