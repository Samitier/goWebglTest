<template>
    <a href='https://github.com/Samitier/goWebglTest'>WebGl Rocks!</a>
</template>

<script>
    import { Scene } from './shaders.webgl.js'

    export default {
        components: {
        },
        created() {
            let homeWebgl = new Scene()
        }
    }
</script>

<style scoped>
    a {
       font-family: 'Poiret One', cursive;
       color: white; 
       position: absolute;
       text-decoration: none;
       font-weight: bold;
       z-index: 10;
       bottom: 1em;
       right: 1em;
       font-size: 15px;
       background-color: rgba(1,1,1,0.2);
       padding: 0.5em;
    }
</style>