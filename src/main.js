import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import './assets/css/style.css'
import axios from 'axios'
import store from './store'


require('@/store/subscriber')

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

Vue.config.productionTip = false;

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
})

Vue.use(NowUiKit);


