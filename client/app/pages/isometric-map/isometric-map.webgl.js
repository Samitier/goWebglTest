import { OrthographicCamera, DirectionalLight, BoxGeometry, MeshLambertMaterial, Mesh } from "three"
import { ThreeScene } from "../../webgl-utils/three-scene.js"
 
const CUBE_SIZE = 20

export class IsometricMap extends ThreeScene {
    
    constructor() {
        super(true, { antialias: true })
        this.init()
    }

    init() {
        let xSize = window.innerWidth / 2, 
            ySize  = window.innerHeight / 2
        this.camera = new OrthographicCamera( -xSize, xSize, ySize, -ySize, - 500, 1000 )
        this.camera.position.set(200,100,200)

		let geometry = new BoxGeometry( CUBE_SIZE, CUBE_SIZE, CUBE_SIZE ),
            material = new MeshLambertMaterial( { color: 0xffffff } ),
            map = this.getMap()

        for( let i = 0; i < map.length; ++i ) {
            for ( let j = 0; j < map[i].length; ++j ) {
                let height = map[i][j]
                if ( height != 0 ) {
                    let cube = new Mesh( geometry, material ),
                        xPos = ( j - Math.floor( map[i].length / 2 )) * CUBE_SIZE,
                        yPos = CUBE_SIZE * ( height - 1 ) / 2,
                        zPos = ( i - Math.floor( map.length / 2 )) * CUBE_SIZE
                    cube.position.set( xPos, yPos, zPos)
                    cube.scale.set( 1, height, 1 )
                    this.scene.add( cube )
                }
            }
        }

        let directionalLight = new DirectionalLight( 0xffffff, 1 )
        directionalLight.position.set(1, 1, 0)
        this.scene.add( directionalLight )

        this.renderer.setClearColor( 0x92ccdd )
        super.render()
    }
 
    animate() {
        let timer = Date.now() * 0.0001
		this.camera.position.x = Math.cos( timer ) * 200
		this.camera.position.z = Math.sin( timer ) * 200
        this.camera.lookAt( this.scene.position )
    }

    onResizeWindow() {
        let xSize = window.innerWidth / 2, 
            ySize  = window.innerHeight / 2
        this.camera.left    = -xSize
        this.camera.right   = xSize
        this.camera.top     = ySize
        this.camera.bottom  = -ySize
        this.camera.updateProjectionMatrix()
        super.resize()
    }

    getMap() {
        return [
            [0,0,1,0,0],
            [0,1,2,1,0],
            [1,2,3,2,1],
            [0,1,2,1,0],
            [0,0,1,0,0],
        ]
    }
}