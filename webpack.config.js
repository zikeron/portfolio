const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  devtool: 'hidden-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[name]-[hash].mjs',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: 'vendor-[hash].js',
          enforce: true,
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  modules: false,
                  useBuiltIns: 'entry',
                  targets: {
                    browsers: [
                      'Chrome >= 60',
                      'Safari >= 10.1',
                      'iOS >= 10.3',
                      'Firefox >= 54',
                      'Edge >= 15',
                    ],
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpeg)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/ziker.png',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new WebpackPwaManifestPlugin({
      name: 'Zikeron',
      short_name: 'Ziker',
      description: 'Página personal de Alejandro Cortez',
      background_color: '#fff',
      theme_color: '#1c2b2f',
      icons: [
        {
          src: path.resolve('public/ziker.png'),
          sizes: [16, 32, 48, 96, 114, 120, 144, 512, 180],
        },
        {
          src: path.resolve('public/ziker.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
    new RobotstxtPlugin({
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
        },
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: 'Googlebot-Image',
          allow: '/',
          disallow: ['/*.jpeg$', '/*.png$', '/*.icon$', '/*.jpg$'],
        },
      ],
      host: 'http://zikeron.com',
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp(/.(?:png|jpg|jpeg|svg)$/),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
      ],
    }),
  ],
};
