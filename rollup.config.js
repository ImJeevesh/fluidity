import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import babel from 'rollup-plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import svg from "rollup-plugin-svg";
import css from "rollup-plugin-import-css";

const packageJson = require("./package.json");

export default {
  input: 'src/index.tsx',
  inlineDynamicImports: true,
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [
    'react',
    'react-dom'
  ],
  plugins: [
    css(),
    svg(),
    peerDepsExternal(),
    resolve({ extensions: ['.jsx', '.js', '.tsx'] }),
    commonjs(),
    babel({
      extensions: ['.jsx', '.js', '.tsx'], 
      exclude: 'node_modules/**'
    }),
    typescript({ useTsconfigDeclarationDir: true }),
  ]
};
