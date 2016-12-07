import { OrthographicCamera, DirectionalLight, BoxGeometry, MeshLambertMaterial, Mesh, Raycaster, Color } from "three"
import { ThreeScene } from "../../webgl-utils/three-scene.js"
 
const   CUBE_SIZE = 24,
        CAMERA_X = 200,
        CAMERA_Y = 150,
        CAMERA_Z = 200,
        TIME_STEP = 0.01

export class IsometricMap extends ThreeScene {
    
    constructor(canvas) {
        super(true, { antialias: true, canvas })
        this.init()
    }

    init() {
        //Camera setup
        let xSize = window.innerWidth / 2, 
            ySize  = window.innerHeight / 2
        this.camera = new OrthographicCamera( -xSize, xSize, ySize, -ySize, - 500, 1000 )

        //Painting map
		let geometry = new BoxGeometry( CUBE_SIZE, CUBE_SIZE, CUBE_SIZE ),
            map = this.getMap()
        for( let i = 0; i < map.length; ++i ) {
            for ( let j = 0; j < map[i].length; ++j ) {
                let height = map[i][j]
                if ( height != 0 ) {
                    let material = new MeshLambertMaterial( { color: 0xffffff } ),
                        cube = new Mesh( geometry, material ),
                        xPos = ( j - Math.floor( map[i].length / 2 )) * CUBE_SIZE,
                        yPos = CUBE_SIZE * ( height - 1 ) / 2,
                        zPos = ( i - Math.floor( map.length / 2 )) * CUBE_SIZE
                    cube.position.set( xPos, yPos, zPos)
                    cube.scale.set( 1, height, 1 )
                    this.scene.add( cube )
                }
            }
        }

        //Light setup
        let directionalLight = new DirectionalLight( 0xffffff, 1 )
        directionalLight.position.set(1, 1, 0)
        this.scene.add( directionalLight )

        //Animation setup
        this.time = 0.8
        this.camera.position.set(
            Math.cos( this.time ) * CAMERA_X, 
            CAMERA_Y, 
            Math.sin( this.time ) * CAMERA_Z
        )
        this.camera.lookAt( this.scene.position )
        this.rotateAnimation = false

        //Raycast setup
        this.raycaster = new Raycaster()
        this.intersectedObject = null
        this.selectedObject = null
        this.isSelecting = false

        //Render setup
        this.renderer.setClearColor( 0x92ccdd )
        super.render()
    }
 
    animate() {
        if(this.rotateAnimation) {
            this.time += TIME_STEP
            this.camera.position.x = Math.cos( this.time ) * CAMERA_X
            this.camera.position.z = Math.sin( this.time ) * CAMERA_Z
            this.camera.lookAt( this.scene.position )
        }
    }

    checkRaycastCollision(intersectedObject, isSelectingObject) {
        this.raycaster.setFromCamera( this.mouse, this.camera )
        let intersection = this.raycaster.intersectObjects( this.scene.children )

        if ( intersection.length > 0 ) {
            if ( intersectedObject != intersection[0].object ) {
                if ( intersectedObject ) intersectedObject.material.color = new Color( 0xffffff )
                intersectedObject = intersection[0].object
                intersectedObject.material.color = isSelectingObject ? new Color( 0xAAAAAA ) : new Color( 0xeeeeee )
            }
            else if(intersectedObject && isSelectingObject) {
                intersectedObject.material.color = new Color( 0xffffff )
                intersectedObject = null
            }
        } 
        else if (intersectedObject) {
            intersectedObject.material.color = new Color( 0xffffff )
            intersectedObject = null
        }
        if(!isSelectingObject && this.selectedObject) this.selectedObject.material.color = new Color( 0xAAAAAA )
        return intersectedObject
    }

    setRotateAnimation(isRotating) {
        this.rotateAnimation = isRotating
    }

    setIsSelecting(isSelecting) {
        this.isSelecting = isSelecting
        if(!this.isSelecting && this.selectedObject) {
            this.selectedObject.material.color = new Color( 0xffffff )
            this.selectedObject = null
        }
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

    onMouseMove(event) {
        if(!this.isSelecting) return
        this.mouse = {
            x: ( event.clientX / window.innerWidth ) * 2 - 1,
            y: - ( event.clientY / window.innerHeight ) * 2 + 1
        }
        this.intersectedObject = this.checkRaycastCollision(this.intersectedObject, false)
    }

    onMouseClick(event) {
        if(!this.isSelecting) return
        this.mouse = {
            x: ( event.clientX / window.innerWidth ) * 2 - 1,
            y: - ( event.clientY / window.innerHeight ) * 2 + 1
        }
        this.selectedObject = this.checkRaycastCollision(this.selectedObject, true)
    }

    getMap() {
        return [
            [2.0, 2.5, 2.5, 2.0, 1.5, 1.0, 1.5, 2.0, 0.0, 0.0, 1.5, 2.0, 2.5, 3.0],
            [1.5, 2.0, 2.0, 1.0, 1.0, 1.0, 1.5, 1.5, 1.5, 1.0, 1.5, 1.5, 2.0, 2.5],
            [0.0, 1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.5, 2.0, 2.0, 2.0],
            [0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.5, 1.5, 1.5, 1.5, 2.0],
            [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.5, 1.5, 1.5, 1.5, 1.0, 1.0, 1.0, 1.5],
            [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.5, 1.5, 1.5, 1.5, 1.0, 1.0, 1.0, 1.0],
            [0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0],
            [1.0, 1.0, 1.5, 2.0, 1.5, 1.0, 1.0, 1.5, 1.5, 1.0, 1.0, 1.0, 1.5, 1.5],
            [1.0, 1.5, 1.5, 2.0, 2.5, 1.0, 1.5, 1.5, 1.5, 1.5, 1.0, 1.0, 1.5, 2.0],
            [1.0, 1.5, 2.0, 2.0, 2.0, 1.0, 1.5, 2.0, 1.5, 1.5, 1.0, 1.0, 1.0, 1.5],
            [0.0, 0.0, 2.0, 2.0, 2.0, 1.0, 1.5, 1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0],
            [0.0, 1.5, 1.5, 1.5, 1.5, 1.0, 1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0],
            [1.0, 1.5, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0],
            [1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0],
        ]
    }
}