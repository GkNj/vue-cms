//入口文件

import Vue from 'vue'
import App from './App.vue'
//导入mint-ui中的组件
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false
//导入mui组件
import './lib/mui/css/mui.min.css'

new Vue({
    render: h => h(App),
}).$mount('#app')
