const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
   entry: './src/index.js',
   plugins: [
     new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: []
     }),
      new HtmlWebpackPlugin({
        title: 'Webpack Output Management'
      })
   ],
   output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
   },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           //loader的执行顺序是 从右往左，从下往上
            "style-loader", //创建一个style标签，并且把引入进来的css样式都放到这个标签
            "css-loader" //单独使用只能保证都引用css模块进来，但是并没有效果
        ],
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images/"
              }
           }
         ]
       }
     ]
   }
}