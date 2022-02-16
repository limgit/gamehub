const { config } = require('@swc/core/spack');

module.exports = config({
  entry: {
    web: __dirname + '/app/client/src/index.tsx',
    server: __dirname + '/app/server/index.ts'
  },
  output: {
    path: __dirname + '/build',
  },
  module: {
  },
});
