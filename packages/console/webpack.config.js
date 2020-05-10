const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  resolve: {
    alias: {
      '@mi-wmf/utils': path.resolve(__dirname, '../utils/index.js'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 3001,
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'assets/app.js',
    publicPath: 'http://localhost:3001/',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      options: {
        presets: ["@babel/preset-react"],
      },
    }, ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "consoleApp",
      library: {
        type: "var",
        name: "consoleApp"
      },
      filename: 'consoleApp.js',
      remotes: {
        simba: "simba",
        pumbaa: "pumbaa",
      },
      exposes: {
        SampleContext: './src/SampleContext',
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "@mi-wmf/utils",
        './src/SampleContext',
        // "../utils",
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
