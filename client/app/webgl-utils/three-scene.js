import { Scene, WebGLRenderer } from "three"
import { RenderStats } from "./render-stats.js"

export class ThreeScene {

    constructor(renderStats) {
        this.scene = new Scene()
        if(renderStats) this.renderStats = new RenderStats()

        this.renderer = new WebGLRenderer()
        this.renderer.setSize( window.innerWidth, window.innerHeight )
        document.body.appendChild( this.renderer.domElement ) 
    }
 
    render() {
        requestAnimationFrame( this.render.bind(this) )
        if(this.renderStats) this.renderStats.begin()
        
        if(this.animate) this.animate()
    
        this.renderer.render( this.scene, this.camera )
        if(this.renderStats) this.renderStats.end()
    }
}
