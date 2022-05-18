const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.base");

module.exports = () => {
  return merge.smart(base, {
    mode: "development",
    devtool: "eval-source-map",

    output: {
      filename: "js/[name].bundle.[hash:6].js",
      chunkFilename: "js/[name].chunk.[chunkhash:6].js",
    },

    devServer: {
      hot: true,
      port: 8051,
      open: true,
      historyApiFallback: true,
    },
  });
};
