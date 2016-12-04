<template>
    <div class='action-buttons-container'>
        <button class='rotate' @click="toggleRotate">{{ isRotating ? 'Stop' : 'Rotate' }}</button>
        <button class="edit">Edit</button>
        <button class="reset">Reset</button>
    </div>
</template>

<script>
    import { IsometricMap } from './isometric-map.webgl.js'

    export default {
        components: {
        },
        created: function() {
            this.isometricMap = new IsometricMap()
        },
        data: () => ({
            isometricMap: {},
            isRotating: false
        }),
        methods: {
            toggleRotate: function() {
                this.isRotating = !this.isRotating
                this.isometricMap.setRotateAnimation(this.isRotating)
            }
        }
    }
</script>

<style scoped>
    .action-buttons-container {
        position:absolute;
        z-index:10;
        bottom: 100px;
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
    }
    .action-buttons-container > button:hover {
        background-color: white;
        color: #444444;
    }
</style>