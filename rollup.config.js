import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"
import del from 'rollup-plugin-delete'

export default [
  {
    input: './src/index.ts',
    output: {
      file: 'dist/life/bd-number-formatter.js',
      format: 'iife',
      name: 'bdNumberFormatter'
    },
    plugins: [
      del({
        targets: [ './dist/*' ]
      }),
      typescript({ module: 'esnext' }),
      terser()
    ]
  }
]
