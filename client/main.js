import 'styles/index.css'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import routes from './routes'
import app from './app'
import apiService from 'services/api'

Vue.use(VueRouter)
Vue.use(VueResource)
apiService.init(Vue)

const router = new VueRouter({ 
    mode: 'history',
    routes
})

new Vue({ 
    el: '#app',
    router,
    render: h => h(app) 
})
