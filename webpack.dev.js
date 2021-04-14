const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
  module: {
    rules: [
    {
      test: /\.scss$/,
      use: [
        "style-loader", // step 3 injects styles into DOM
        "css-loader", // step 2 turns css into commonjs
        "sass-loader" // step 1 turns sass into css
      ]
    }]
  }
});