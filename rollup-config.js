// Set folder name
const problem = 'matrixElementsSum'

// No need to touch config
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  entry: `src/${problem}/main.js`,
  dest: `src/${problem}/build.js`, // output a single application bundle
  sourceMap: false,
  format: 'cjs', // for browser settings set format 'iife'
  // moduleName: 'funcNameToBeOnWindow',  // for browser settings uncomment and give
  onwarn: function (warning) {
    console.warn(warning.message);
  },
  plugins: [
    nodeResolve({ jsnext: true, module: true }),
    commonjs({ include: 'node_modules/rxjs/**' }),
    uglify({}, minify)
  ]
};