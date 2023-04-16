// this file does general set up for your app. Everything here will apply to your vue app

import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from '@/services/HelloAPI'

let app = createApp(App)

app.config.globalProperties.$hello_api = HelloAPI

app.mount('#app')



