const path = require("path");
const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer")
];
module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    filename: "Bundled.js",
    path: path.resolve(__dirname, "app")
  },
  devServer: {
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 4000
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          { loader: "postcss-loader", options: { plugins: postCSSPlugins } }
        ]
      }
    ]
  }
};
