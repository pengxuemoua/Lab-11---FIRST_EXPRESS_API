// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = { // create object to config vue developer server
  devServer: {
    proxy: 'http://127.0.0.1:3000' // web address of the express server
    // proxy means to send messages via the developer server and send them on to the express server
  }
}


