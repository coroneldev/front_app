import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass' 

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
    plugins: {} // Aquí luego puedes poner Dialog, Notify, etc.
  })

app.mount('#app')


