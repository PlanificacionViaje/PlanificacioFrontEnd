import { createApp } from 'vue'
import App from './App.vue'

import router from './router.js'

const app = createApp(App)
app.config.globalProperties.$session = {
    userData: null
};

app.use(router).mount('#app')