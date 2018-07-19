// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import lazyLoad from 'vue-lazyload'

Vue.use(lazyLoad, {
    loading: '../static/loading02.gif'
})

import './assets/css/common.css'
import './assets/fonts/iconfont.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "./assets/css/index.css"
import './assets/css/my-mint.scss';

import store from './store'

Vue.use(MintUI)

Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})