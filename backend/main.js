require('../client/styles/index.css')
import Vue from 'vue'
import VueResource from 'vue-resource'
import routes from './routes'
import apiService from './services/api.vue'

Vue.use(VueResource)
apiService.init(Vue)

const app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname.replace('backend','')
    },
    computed: {
        ViewComponent() {
            const matchingView = routes[this.currentRoute] 
            return require(`./pages/${ matchingView || 'errors' }/${ matchingView || '404' }.vue`)
        }
    },
    render(h) {
        return h(this.ViewComponent)
    }
})

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
})

