<template>
    <div>
        <h3 class="section-heading">Finished projects</h3>
        <div class="container projects-container">
            <a class="project-link text-center row-3" v-for="project in projects" :href="project.link">
                <i>{{ project.icon }}</i>
                <span>{{ project.title }}</span>
            </a>           
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        data() {
            return {
                projects: [
                    { icon: "x", title: "Shaders", link: '/shaders' },
                    { icon: "x", title: "Isometric Map", link: '/isometric-map' },
                    { icon: "x", title: "Models", link: "/about" }
                ]
            }
        }
    }
</script>

<style scoped>
    .projects-container { margin-top: 15px }
    .project-link {
        cursor: pointer;
        text-decoration: none;
        color: black;
    }
    .project-link > i {
        display:block;
        width: 40px;
        height: 40px;
        padding:10px; 
        margin:auto;
        border: 2px solid black;
    }
    .project-link > span {
        display: block;
        font-size:11px;
        margin-top:7px;
        line-height: 1;
    }
</style>