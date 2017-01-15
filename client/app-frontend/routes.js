import Home from './pages/home/home.vue'
import About from './pages/about/about.vue'
import IsometricMap from './pages/isometric-map/isometric-map.vue'
import Shaders from './pages/shaders/shaders.vue'
import Article from './pages/article/article.vue'
import NotFound from './pages/errors/404.vue'

export default [
    { path: '/', component: Home, name: 'home' },
    { path:'/login', component: About, name: 'login' },
    { path:'/isometric-map', component: IsometricMap, name: 'isometricMap' },
    { path:'/shaders', component: Shaders, name: 'shaders' },
    { path:'/a/:slug', component: Article, name: 'article' },
    { path: '*', component: NotFound, name: 'notFound' } 
]
