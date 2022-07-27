import { createApp } from 'vue'
import App from './App.vue'

import router from './router.js'

const app = createApp(App)
app.config.globalProperties.$session = {
    userData: null
};

app.use(router).mount('#app')

// To do:
// 1.Limpiar emits,
// 2.Limpiar en general
// 3.Falta componente gran viaje para hacer la ruta dinámica.
// 5.Que los viajes te lleven al "gran viaje"