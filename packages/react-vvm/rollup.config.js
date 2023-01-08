import typescript from '@rollup/plugin-typescript';
import define from 'rollup-plugin-define';
import swc from '@swc/core';
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

export default [false, true].map(isDev => ({
  input: 'src/index.ts',
  output: {
    file: `dist/react-vvm.${isDev ? 'development' : 'production'}.js`,
    preserveModulesRoot: 'src',
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
    ...(isDev ? [] : [minify()]),
  ],
  external: [
    'react',
    'mobx',
    'mobx-react',
    'mobx-react-lite',
  ],
}));
