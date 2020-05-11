const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 3002,
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'assets/app.js',
    publicPath: "/",
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
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "simba",
      library: { type: "var", name: "simba" },
      filename: "simba.js",
      exposes: {
        App: "./src/components/App",
      },
      shared: ["react", "react-dom", "react-jss"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
