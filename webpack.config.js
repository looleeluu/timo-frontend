const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PATH_SOURCE = path.join(__dirname, "./src");
const PATH_DIST = path.join(__dirname, "./dist");

module.exports = (env) => {
  const environment = env.environment;
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
    module: {
      rules: [
        {
          test: /\.s?[ac]ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
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
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new CleanWebpackPlugin(),
    ],
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "assets"),
        "@components": path.resolve(__dirname, "src/components"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
      },
      extensions: [".js", ".jsx"],
    },
    output: {
      path: PATH_DIST,
      filename: "[bundle].js",
      clean: true,
    },
  };
};
