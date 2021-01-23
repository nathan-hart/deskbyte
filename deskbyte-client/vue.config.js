module.exports = {
  devServer: {
    host: "http://localhost:8080",
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/styles.scss";`,
      },
    },
  },
};
