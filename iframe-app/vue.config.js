module.exports = {
  configureWebpack: {
    plugins: [
      vue(),
      Components({
        dirs: ['src/components'],
        globs: ['src/components/*.{vue}'],
        exclude: [],
        dts: false,
        version: 2.7,
      }),
    ],
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss', '.sass', '.css'],
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] },
          exclude: /node_modules/,
        },
      ],
    },
  },
};