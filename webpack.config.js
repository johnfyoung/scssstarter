const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/js/index.js", "./src/scss/starter.scss"],
  output: {
    filename: "js/starter.min.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/img", to: path.resolve(__dirname, "build/img") },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "css", name: "[name].min.css" },
          },

          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
