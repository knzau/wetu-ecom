"use strict";

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = (config) => {
  config.plugins.push(new MonacoWebpackPlugin());
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
    type: "asset/resource",
  });

  return config;
};
