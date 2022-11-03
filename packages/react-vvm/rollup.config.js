import typescript from '@rollup/plugin-typescript';
import define from 'rollup-plugin-define';
import { terser } from 'rollup-plugin-terser';

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
      target: 'es6',
      ...(!isDev ? {
        declarationDir: 'dist',
        declaration: true,
      } : {
        removeComments: true,
      }),
    }),
    define({
      replacements: {
        isDev: JSON.stringify(isDev),
      },
    }),
    ...(isDev ? [] : [terser()])
  ],
  external: [
    'react',
    'mobx',
    'mobx-react',
    'mobx-react-lite',
  ],
}));
