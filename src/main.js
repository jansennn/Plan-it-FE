import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import './assets/css/style.css'
import axios from 'axios'
import store from './store'
// Vue Toast Notification
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
// Bootstrap Vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//Google Maps
import * as VueGoogleMaps from 'vue2-google-maps'
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin


require('@/store/subscriber')

//axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

axios.defaults.baseURL = 'https://sotardok.web.id/plan-it/api/'

Vue.config.productionTip = false;

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
})

Vue.use(NowUiKit);
// Vue.use(Vuetify);
Vue.use(VueToast);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCqk0o7gAPnf-hWOKtlFPjYtvWBKgDo33o',
    libraries: 'places', 
  },
})
Vue.use(Loading);

