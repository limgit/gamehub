const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  if (!(env && 'target' in env)) {
    throw Error('Please provide proper `--env target=<value>`.');
  }

  const { target } = env;
  const isProd = argv.mode === 'production';
  if (target !== 'server' && target !== 'client') {
    throw Error(
      `\`${target}\` is not a valid build target.\n`
      + 'Please provide `--env target=<value>` as `client` or `server`.',
    );
  }

  const baseConfig = {
    mode: isProd ? 'production' : 'development',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'app'),
        '@client': path.resolve(__dirname, 'app/client/src'),
        '@server': path.resolve(__dirname, 'app/server'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    entry: path.resolve(__dirname, target === 'client' ? 'app/client/src/index' : 'app/server/index'),
    output: {
      path: path.resolve(__dirname, `build/${target}`),
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, `app/${target}/tsconfig.json`),
          },
        },
      ],
    },
  };

  if (target === 'server') {
    return {
      ...baseConfig,
      target: 'node',
      node: {
        __dirname: false,
      },
      externals: [nodeExternals()],
    };
  }
  return {
    ...baseConfig,
    devtool: isProd ? false : 'source-map',
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    output: {
      ...baseConfig.output,
      filename: '[name].[contenthash].bundle.js',
      chunkFilename: '[name].[chunkhash].bundle.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'app/client/public',
            globOptions: {
              ignore: ['**/index.html'],
            },
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'app/client/public/index.html'),
      }),
    ],
  };
};
