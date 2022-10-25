"use strict";
require("dotenv").config();
const path = require("path");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, "../libs/child_node_remove"),
      "core-js/features/promise",
      "core-js/features/object",
      "core-js/features/array",
      path.resolve(__dirname, "../app/entry.js"),
    ],
  },
  output: {
    filename: "[name].js",
    publicPath: `http://localhost:8080/assets/`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    alias: { root: path.resolve(__dirname, "../") },
    extensions: [".js", ".jsx", ".png", ".jpg", ".svg", ".pdf"],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  devtool: "eval-source-map",
  devServer: {
    // port definition needed for ReactRefreshWebpackPlugin, otherwise an error shows in the console.
    port: 8080,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  mode: "development",
};
