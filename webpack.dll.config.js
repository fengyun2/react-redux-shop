/**
 * manifest 文件的格式大致如下，由包含的 module 和对应的 id 的键值对构成。
 */

const path = require('path');
const webpack = require('webpack');

const vendors = [
    'react',
    'react-dom',
    'react-router',
    'react-redux',
    'redux',
    'babel-polyfill',
    'isomorphic-fetch'
];

module.exports = {
    entry: {
        vendor: vendors
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].dll.js',

        /**
         * output.library
         * 将会定义为 window.${ouput.library}
         * 在这次的例子中, 将会定义为 `window.vendor_library`
         */
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
          /**
           * path
           * 定义 mainifest 文件生成的位置
           * [name]的部分由 entry 的名字替换
           *
           */
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            /**
             * name
             * dll bundle 输出到那个变量上
             * 和 output.library一样即可
             */
            name: '[name]_library',
            context: __dirname,
        })
    ]
}
