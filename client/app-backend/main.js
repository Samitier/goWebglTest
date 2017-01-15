import 'styles/index.css'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'
import apiService from 'services/api.vue'
import app from './app'

Vue.use(VueRouter)
Vue.use(VueResource)
apiService.init(Vue)

const router = new VueRouter({ 
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    let isLoggedIn = apiService.getApiToken()
    if(to.name === 'login' && isLoggedIn) next({ name: 'home' })
    else if(to.name !== 'login' && !isLoggedIn) next({ name: 'login' })
    else next()
})

new Vue({ 
    el: '#app',
    router,
    render: h => h(app) 
})
