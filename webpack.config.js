const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: { loader: "babel-loader" },
        exclude: /node_modules/
            },
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
          },
          {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: './fonts/[name].[ext]'
              }
            }
          },
          {
            test: /\.(png|jpe?g|gif|ico|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: './images/[name].[ext]',
                  esModule: false
                },
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65
                  },
                  // optipng.enabled: false will disable optipng
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.90],
                    speed: 4
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  // the webp option will enable WEBP
                  webp: {
                    quality: 75
                  }
                }
              },
            ]
          }
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
      }),
      new MiniCssExtractPlugin({filename: 'style.css'}),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default']
        },
        canPrint: true
      }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    ],
}