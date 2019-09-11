const htmlWebpackPlugin = require('html-webpack-plugin');
const TeserPlugin = require('terser-webpack-plugin');
module.exports = () => {
 return {
   entry: './src/js/index',
   module: {
     rules: [
       {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader'
         }
       }
     ]
   },
   optimization: {
       minimizer: [new TeserPlugin()]
   },
   plugins: [
     new htmlWebpackPlugin({
       template: './src/index.html',
       filename: './index.html'
     })
   ]
 }
}