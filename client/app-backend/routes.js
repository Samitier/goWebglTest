import HomeBackend from './pages/home-backend/home-backend'
import Login from './pages/login/login'
import NotFound from './pages/errors/404'

let routes = [
    { path: '/', component: HomeBackend, name: 'home' },
    { path:'/login', component: Login, name: 'login' },
    { path: '*', component: NotFound, name: 'notFound' } 
]

/* Setting '/backend/' before every route path defined */
let root = '/backend' 
for(let route of routes) route.path = root + route.path 
export default routes
