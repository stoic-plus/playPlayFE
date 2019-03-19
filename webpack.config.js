const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
      {test: /\.(png|svg|jpg|gif)$/, loaders: ['file-loader']}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css', '.scss']
  },
  node: {
    fs: "empty"
  }
};
