const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../", "src", "main.tsx"),
  module: {
    rules: [
      {
        test: /\.([jt]sx?)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: "css-loader",
      },
      {
        test: /\.s[ac]ss$/,
        include: [path.resolve(__dirname, "node_modules")],
        use: ["css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    modules: [path.resolve(__dirname, "../", "node_modules")],
    alias: {
      "@": path.resolve(__dirname, "../", "src"),
    },
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 模板
    new HtmlWebpackPlugin({
      inject: "body",
      filename: "index.html",
      title: "webpack5",
      template: path.resolve(__dirname, "../", "index.html"),
    }),
  ],
};
