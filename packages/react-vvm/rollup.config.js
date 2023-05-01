import typescript from '@rollup/plugin-typescript';
import define from 'rollup-plugin-define';
import swc from '@swc/core';
import dts from 'dts-bundle-generator';
import fs from 'fs';
import tsconfig from './tsconfig.json';

const minify = () => ({
  async generateBundle(_, bundle) {
    const [filename, { name, code }] = Object.entries(bundle)[0];

    const minified = await swc.transform(code, {
      minify: true,
      jsc: {
        target: tsconfig.compilerOptions.target,
        minify: {
          mangle: true,
          compress: true,
        },
      },
    });

    delete bundle[filename];

    this.emitFile({
      type: 'asset',
      source: minified.code,
      fileName: filename,
    });
  },
});

const bundleTypes = () => ({
  generateBundle(_, bundle) {
    const types = dts.generateDtsBundle([{ filePath: './dist/index.d.ts' }]).join('');

    fs.readdirSync('./dist').filter(it => it.endsWith('.d.ts')).forEach(it => {
      fs.unlinkSync(`./dist/${it}`);
      delete bundle[it];
    });

    this.emitFile({
      type: 'asset',
      source: types,
      fileName: 'index.d.ts',
    });
  },
});

export default [false, true].map(isDev => ({
  input: 'src/index.ts',
  output: {
    file: `dist/react-vvm.${isDev ? 'development' : 'production'}.js`,
    format: 'esm',
  },
  plugins: [
    typescript({
      tsconfig: `./tsconfig.json`,
      ...(!isDev && {
        declarationDir: 'dist',
        declaration: true,
      }),
    }),
    define({
      replacements: {
        __DEV__: JSON.stringify(isDev),
      },
    }),
    isDev ? bundleTypes() : minify(),
  ],
  external: [
    'react',
    'mobx',
    'mobx-react',
    'mobx-react-lite',
  ],
}));
