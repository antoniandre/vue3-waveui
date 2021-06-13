module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-waveui/dist/' : '/',

  transpileDependencies: ['wave-ui'], // ! \\

  css: {
    loaderOptions: {
      sass: { additionalData: '@import "@/scss/_variables.scss";' }
    }
  },
  // Trying whitespace preserving in Vue 3...
  // chainWebpack: config => {
  //   // Preserve white spaces for ssh-pre component.
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .tap(options => {
  //       // console.log(options)
  //       // options.compilerOptions.whitespace = 'preserve'
  //       return options
  //     })
  // }
}
