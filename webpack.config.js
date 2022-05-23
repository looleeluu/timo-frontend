const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PATH_SOURCE = path.join(__dirname, "./src");
const PATH_DIST = path.join(__dirname, "./dist");

module.exports = (env) => {
  const environment = env.environment;
  const isProduction = environment === "production";
  const isDevelopment = environment === "development";

  return {
    mode: environment,
    devtool: isDevelopment ? "inline-source-map" : "source-map",
    devServer: {
      static: {
        directory: PATH_DIST,
      },
      host: "localhost",
      port: 8080,
      historyApiFallback: true,
      client: {
        overlay: {
          errors: true,
          warnings: true,
        },
      },
    },
    entry: [path.join(PATH_SOURCE, "./index.js")],
    output: {
      path: PATH_DIST,
      filename: "js/[name].[contenthash].js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/, // Don't apply to files residing in node_modules
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    debug: true,
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
                [
                  "@babel/preset-react",
                  {
                    runtime: "automatic",
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: "url-loader",
              options: {
                mimetype: "image/png",
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: "file-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
