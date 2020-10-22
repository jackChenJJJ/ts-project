import typescript from 'rollup-plugin-typescript'
import sourceMaps from 'rollup-plugin-sourcemaps'
import json from '@rollup/plugin-json'

export default {
    input: './src/index.ts',
    plugins: [
        typescript({
            exclude: 'node_modules/**',
            typescript: require("typescript")
        }),
        sourceMaps(),
        json(),
    ],
    output: [
        {
            format: 'cjs',
            file: 'dist/ts.cjs.js'
        },
        {
            format: 'es',
            file: 'dist/ts.esm.js'
        },
        {
            format: 'umd',
            file: 'dist/ts.umd.js',
            name: 'Vue'
        }
    ]
}