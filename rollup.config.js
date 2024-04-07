import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import glob from 'glob';
import peerDeps from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: [
    'src/index.ts',
    ...glob.sync('src/{components,utils}/**/!(*.!(stories|test)).{ts,tsx}'),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    peerDeps(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    scss({
      sourceMap: true,
      output: 'dist/bundle.min.css',
      outputStyle: 'compressed',
    }),
    terser(),
  ],
};

export default options;
