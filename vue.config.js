module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-waveui/dist/' : '/',

  transpileDependencies: ['wave-ui'], // ! \\

  css: {
    loaderOptions: {
      sass: { additionalData: '@import "@/scss/_variables.scss";' }
    }
  }
}
