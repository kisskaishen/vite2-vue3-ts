import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

// 调试工具
import Vconsole from 'vconsole';
new Vconsole();

const app = createApp(App)


app.use(router).use(store).mount('#app')
