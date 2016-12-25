import {  } from "three"
import { ThreeScene } from "../../webgl-utils/three-scene.js"
 
const MAX_PARTICLES = 2500000

export class Scene extends ThreeScene {
    
    constructor() {
        super(true)
        this.init()
    }

    init() {
        this.camera = new PerspectiveCamera(28, window.innerWidth / window.innerHeight, 1, 10000)
        this.camera.position.z = 100


        this.clock = new Clock(true)
        this.renderer.setClearColor( 0x123456 )
        super.render()
    }
 
    animate() {

        let delta = this.clock.getDelta()
			tick += delta

    }

    onResizeWindow() {
        this.camera.aspect = window.innerWidth / window.innerHeight
		this.camera.updateProjectionMatrix()
        super.resize()
    }
    /**
             var container;
        var camera, scene, renderer;
        var uniforms;

        init();
        animate();

        function init() {
            container = document.getElementById( 'container' );

            camera = new THREE.Camera();
            camera.position.z = 1;

            scene = new THREE.Scene();

            var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

            uniforms = {
                u_time: { type: "f", value: 1.0 },
                u_resolution: { type: "v2", value: new THREE.Vector2() },
                u_mouse: { type: "v2", value: new THREE.Vector2() }
            };

            var material = new THREE.ShaderMaterial( {
                uniforms: uniforms,
                vertexShader: document.getElementById( 'vertexShader' ).textContent,
                fragmentShader: document.getElementById( 'fragmentShader' ).textContent
            } );

            var mesh = new THREE.Mesh( geometry, material );
            scene.add( mesh );

            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio( window.devicePixelRatio );

            container.appendChild( renderer.domElement );

            onWindowResize();
            window.addEventListener( 'resize', onWindowResize, false );

            document.onmousemove = function(e){
              uniforms.u_mouse.value.x = e.pageX
              uniforms.u_mouse.value.y = e.pageY
            }
        }

        function onWindowResize( event ) {
            renderer.setSize( window.innerWidth, window.innerHeight );
            uniforms.u_resolution.value.x = renderer.domElement.width;
            uniforms.u_resolution.value.y = renderer.domElement.height;
        }

        function animate() {
            requestAnimationFrame( animate );
            render();
        }

        function render() {
            uniforms.u_time.value += 0.05;
            renderer.render( scene, camera );
        }
     */
}