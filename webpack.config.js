const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'starter.min.js',
    path: path.resolve(__dirname, 'build/js'),
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: 'static', to: path.resolve(__dirname, 'build') }
        ]
    })
]
};