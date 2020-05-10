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
    port: 3003,
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'assets/app.js',
    publicPath: 'http://localhost:3003/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "pumbaa",
      library: { type: "var", name: "pumbaa" },
      filename: 'pumbaa.js',
      remotes: {
        consoleApp: 'consoleApp',
      },
      exposes: {
        App: './src/App.js',
      },
      shared: [
        "react",
        "react-dom",
        "@mi-wmf/utils",
        // "../utils",
        // "../console/src/SampleContext"
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
