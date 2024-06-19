import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue, { primeVueConfig } from '../src/modules/primeVueConfig';

const app = createApp(App)
app.use(PrimeVue, primeVueConfig);
app.mount('#app')
