const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = env  => {
 return {
   entry: './src/js/index',
   module: {
     rules: [
       {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
           options: {
             envName: env
           }
         }
       }
     ]
   },
   plugins: [
     new htmlWebpackPlugin({
       template: './src/index.html',
       filename: './index.html'
     })
   ]
 }
}