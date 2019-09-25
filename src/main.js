//入口文件

import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
// import Axios from 'axios'
//导入mint-ui中的组件
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
//导入vue-resource
import VueResource from 'vue-resource'



// Axios.defaults.baseURL = '/api'
Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false
//导入mui组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import router from './router'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
