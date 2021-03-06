import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'normalize.css'
import './assets/less/common.less';

// import { Seniverse } from './assets/js/util'
// let sen = new Seniverse('hefei')
// sen.getDailyWeather().then(re => {
//     console.log(re)
// }).catch(err => {
//   console.log(err);
// });

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
