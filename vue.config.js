const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify'
  ],
  pwa:{
    name: "DevFest India 2023",
    themeColor: "#3D7FF5",
    msTileColor: "#3D7FF5",
    short_name: 'DevFest India',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  }
})
