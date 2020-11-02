import { createApp } from 'vue'
import App from './App.vue'
require('./assets/main.scss');
import router from './router';
import { StoreSymbol, createState } from './composables/use-store';


createApp(App).use(router).provide(StoreSymbol, createState()).mount('#app')
