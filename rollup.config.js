import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'esm',
        preserveModulesRoot: 'src',
    },
    plugins: [
        typescript({
            tsconfig: `./tsconfig.json`,
            declaration: true,
            declarationDir: 'dist',
        }),
        terser(),
    ],
    external: [
        'react',
        'mobx',
        'mobx-react',
        'mobx-react-lite',
    ],
};
