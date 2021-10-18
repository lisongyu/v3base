import { createApp } from 'vue'
import App from './App.vue'
const app =createApp(App).use(store).use(router)
import pluginObject from './plugins/demo01'
import router from './router'
import store from './store'
app.use(pluginObject)
app.mount('#app')
