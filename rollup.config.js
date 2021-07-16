import path from 'path';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';

const ROOT_DIR = process.cwd();
const INPUT_FILE = path.resolve(ROOT_DIR, 'src', 'index.ts');
const pkg = require(path.resolve(ROOT_DIR, 'package.json'));

const config = {
  extensions: ['.ts', '.tsx'],
};

export default {
  input: INPUT_FILE,
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: config.extensions }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declarationDir: path.resolve(ROOT_DIR, './typings'),
          declarationMap: true,
        },
        include: [path.resolve(ROOT_DIR, './src/**/*')],
      },
      rollupCommonJSResolveHack: true,
      useTsconfigDeclarationDir: true,
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions: config.extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }),
    terser(),
    json({
      compact: true
    })
  ]
};
