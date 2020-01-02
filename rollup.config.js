import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import resolve from '@rollup/plugin-node-resolve'

const createConfig = (input, output, additionnalPlugins = []) => ({
  input,
  output: {
    file: output,
    format: 'cjs',
  },
  plugins: [
    resolve({
      mainFields: ['jsnext:main'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    ...additionnalPlugins,
  ],
})

export default [
  createConfig('src/index.js', 'lib/index.js'),
  createConfig('src/index.js', 'lib/index.min.js', [uglify()]),
]
