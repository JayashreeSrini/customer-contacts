import { createApp } from 'vue'
import App from './App.vue'
require('./assets/main.scss');
import router from './router';
import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
            count: 1
        }
    }
})

createApp(App).use(router).use(store).mount('#app')
