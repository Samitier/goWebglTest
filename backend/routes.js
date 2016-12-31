import HomeBackend from './pages/home-backend/home-backend.vue'
import Login from './pages/login/login.vue'
import NotFound from './pages/errors/404.vue'

let routes = [
    { path: '/', component: HomeBackend, name: 'home' },
    { path:'/login', component: Login, name: 'login' },
    { path: '*', component: NotFound, name: 'notFound' } 
]


/* Setting the /backend/ before every route path */
let root = '/backend' 
for(let route of routes) route.path = root + route.path 
export default routes
