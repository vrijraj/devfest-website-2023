const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify'
  ],
  pwa:{
    name: "DevFest 2023",
    themeColor: "#3D7FF5",
    msTileColor: "#3D7FF5",
    short_name: 'DevFest',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  }
})
