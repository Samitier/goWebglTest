<template>
    <div class='action-buttons-container'>
        <button class='rotate' @click="toggleRotate" v-bind:class="{ active: isRotating }"> Rotate </button>
        <button class="edit" @click="toggleEdit" v-bind:class="{ active: isEditing }"> Edit </button>
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
            isRotating: false,
            isEditing: false
        }),
        methods: {
            toggleRotate: function() {
                this.isRotating = !this.isRotating
                this.isometricMap.setRotateAnimation(this.isRotating)
            },
            toggleEdit: function() {
                this.isEditing = !this.isEditing
                this.isometricMap.setIsSelecting(this.isEditing)
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
    .action-buttons-container > button:hover, .action-buttons-container > button.active {
        background-color: white;
        color: #444444;
    }
</style>