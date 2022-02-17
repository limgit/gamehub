const path = require('path');

const nodemon = require('nodemon');
const webpack = require('webpack');

const configGen = require('./webpack.config');

function getConfig(target) {
  return configGen(
    {
      target,
    },
    {
      mode: 'development',
    },
  );
}

let isNodemonOn = false;
function startServer() {
  // If server is not started, start server and watch it with nodemon
  if (!isNodemonOn) {
    isNodemonOn = true;

    nodemon({
      script: path.resolve(__dirname, 'build/server/main.bundle.js'),
      ext: 'js json',
      watch: ['build/server/'],
      ignore: [
        path.resolve(__dirname, 'devRunner.js'),
        path.resolve(__dirname, 'build/client/*'),
      ],
    });
    nodemon.on('start', function () {
      console.log('\nServer has started.');
    }).on('quit', function () {
      console.log('\nServer has quit.');
      process.exit();
    });
  }
}

const targets = ['client', 'server'];
const compiler = webpack(targets.map(getConfig));
// Watch for file changes and rebundle targets
compiler.watch({}, (err, stats) => {
  console.log('---------------------------------------------------------------------------');
  console.log('File changes detected. Rebundle...');
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  console.log(stats.toString({
    chunks: false,
    colors: true,
  }));
  console.log(`Bundle updated on ${new Date().toString()}`);

  startServer();
});
