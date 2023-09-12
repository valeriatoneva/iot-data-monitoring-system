const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  externals: {
    express: 'commonjs express'
  }
   // as this is a backend service
};
