<template>
    <div>
        <canvas v-bind:id="canvasClass" @mousemove="canvasMove" @click="canvasClick"></canvas>
        <input class="input-slider" type="range"></input>
        <div class='action-buttons-container'>
            <button class='rotate' @click="toggleRotate" v-bind:class="{ active: isRotating }"> Rotate </button>
            <button class="edit" @click="toggleEdit" v-bind:class="{ active: isEditing }"> Edit </button>
            <button class="reset">Reset</button>
        </div>
    </div>
</template>

<script>
    import { IsometricMap } from './isometric-map.webgl.js'

    export default {
        components: {
        },
        data() {
            return {
                canvasClass: 'isometric-map',
                isometricMap: {},
                isRotating: false,
                isEditing: false
            }
        },
        mounted() {
            this.isometricMap = new IsometricMap( document.getElementById(this.canvasClass) )
        },
        methods: {
            toggleRotate() {
                this.isRotating = !this.isRotating
                this.isometricMap.setRotateAnimation(this.isRotating)
            },
            toggleEdit() {
                this.isEditing = !this.isEditing
                this.isometricMap.setIsSelecting(this.isEditing)
            },
            canvasMove(event) {
                this.isometricMap.onMouseMove(event)
            },
            canvasClick(event) {
                this.isometricMap.onMouseClick(event)
            }
        }
    }
</script>

<style scoped>
    .action-buttons-container {
        position:absolute;
        z-index:10;
        bottom: 80px;
        left:50%;
        margin-left:-100px;
        width:200px;
        text-align:center;
    }
    .action-buttons-container > button {
        border: 2px solid white;
        background-color: transparent;
        color: white;
        padding: 0.5em 1em;
        cursor: pointer;
        transition: all 0.5s;
        outline: 0!important;
    }
    .action-buttons-container > button:hover {
        box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.55);
    }
    
    .action-buttons-container > button.active {
        background-color: white;
        color: #444444;
    }
</style>