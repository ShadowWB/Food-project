"use strict"
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/index.js',
    output: {
        filename: 'bundle.js',
         path:  __dirname + '/js' ,
       // path: path.resolve(__dirname, '/js'),
    },
    watch: true,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test:/\.m?js$/,
                exclude:/node_modules | bower_components/,
                use:{
                    loader: "babel-loader",
                    options: {
                        presets:[['@babel/preset-env',{
                            debug:true,
                            corejs:"^3.27.2",
                            useBuiltIns:"usage"
                        }]]
                        // rootMode: "upward",
                    },
                },

            },
        ]
    }
};