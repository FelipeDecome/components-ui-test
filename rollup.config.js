import jsx from 'acorn-jsx';
import path from 'path';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';

const ROOT_DIR = process.cwd();
const INPUT_FILE = path.resolve(ROOT_DIR, 'lib', 'index.ts');
const pkg = require(path.resolve(ROOT_DIR, 'package.json'));

const config = {
  extensions: ['.js','.ts', '.tsx'],
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
  acornInjectPlugins: [jsx()],
  plugins: [
    peerDepsExternal({
      packageJsonPath: path.resolve(ROOT_DIR, 'package.json'),
    }),
    resolve({ extensions: config.extensions }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          rootDir: path.resolve(ROOT_DIR, 'lib'),
          declarationDir: path.resolve(ROOT_DIR, './typings'),
          declarationMap: true,
        },
        include: [path.resolve(ROOT_DIR, './lib/**/*')],
        exclude: [path.resolve(ROOT_DIR, './lib/**/*.stories.*')]
      },
      rollupCommonJSResolveHack: true,
      useTsconfigDeclarationDir: true,
    }),
    commonjs(),
    json({
      compact: true
    }),
    terser()
  ]
};
