const path = require('path')

const resolvePath = (pathstr) => {
  console.log('__dirname', __dirname);
  return path.resolve(__dirname, pathstr);
};

module.exports = {
  mode: 'development',
  entry: resolvePath('../src/client/app/index.js'),//入口文件
  output: {
    filename: 'index.js',
    path: resolvePath('../dist/static')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
