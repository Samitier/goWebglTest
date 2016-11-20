import { ObjectLoader, PerspectiveCamera, DirectionalLight } from "three"
import { ThreeScene } from "../../webgl-utils/three-scene.js"
 
export class AboutWebgl extends ThreeScene {
    
    constructor() {
        super(true)
        this.init()
    }

    init() {
        this.camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 )
        this.camera.position.set(0, 12, 17)
        this.camera.rotation.x = -0.1

        let directionalLight = new DirectionalLight( 0xFFFFFF, 1 )
        directionalLight.position.set(0, 1, 0.5)
        this.scene.add( directionalLight )

        let loader = new ObjectLoader()
        loader.load( 'assets/models/male-figure.json', mesh => {   
            this.mesh = mesh
            this.scene.add( this.mesh )
            super.render()
        })
    }
 
    animate() {
        this.mesh.rotation.y += 0.01
    }
}