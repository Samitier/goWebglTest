import {Scene, PerspectiveCamera, BoxGeometry, MeshBasicMaterial, Mesh, WebGLRenderer} from "three"
import {RenderStats} from "./render-stats.js"

let scene, camera, renderer, geometry, material, mesh, renderStats
 
let init = () => {
    scene = new Scene()
    renderStats = new RenderStats()

    camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 )
    camera.position.z = 1000
 
    geometry = new BoxGeometry( 200, 200, 200 )
    material = new MeshBasicMaterial( { color: 0xff0000, wireframe: true } )
 
    mesh = new Mesh( geometry, material )
    scene.add( mesh )
 
    renderer = new WebGLRenderer()
    renderer.setSize( window.innerWidth, window.innerHeight )
 
    document.body.appendChild( renderer.domElement ) 
}
 
let animate = () => {
    requestAnimationFrame( animate )
    renderStats.begin()
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02
 
    renderer.render( scene, camera )
    renderStats.end()
}

init()
animate()