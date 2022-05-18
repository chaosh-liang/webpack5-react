const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.base");

module.exports = () => {
  return merge.smart(base, {
    mode: "production",

    output: {
      publicPath: "./",
      path: path.resolve(__dirname, "../", "dist"), // 绝对路径
      filename: "js/[id].bundle.[hash:4].js",
      chunkFilename: "js/[id].chunk.[chunkhash:6].js",
    },
  });
};
