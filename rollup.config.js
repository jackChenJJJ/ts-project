import typescript from 'rollup-plugin-typescript'
import sourceMaps from 'rollup-plugin-sourcemaps'

export default {
    input: './src/index.ts',
    plugin: [
        typescript({
            exclude: 'node_modules/**',
            typescript: require("typescript")
        }),
        sourceMaps()
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
            file: 'dist/ts.umd.js'
        }
    ]
}