module.exports = {
  //publicPath: process.env.NODE_ENV === 'production' ? '/hppbgr/' : '/',

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/main.sass";`
      }
    }
  },

  pwa: {
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is reguired in InjectManifest mode
      swSrc: 'public/service-worker.js'
      // ... other Workerbox options ...
    }
  }
}
