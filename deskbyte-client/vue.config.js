module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8000,
    public: '0.0.0.0:8000',
  },
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/styles.scss";`,
      },
    },
  },
}
