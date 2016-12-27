<template>
    <div>
        <h3 class="section-heading">Finished projects</h3>
        <div class="container projects-container">
            <a class="project-link col-3" v-for="project in projects" :href="project.link">
                <i class="category-icon">{{ project.icon }}</i>
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
                    { icon: "", title: "Shaders", link: '/shaders' },
                    { icon: "", title: "Isometric Map", link: '/isometric-map' },
                    { icon: "", title: "Models", link: "/about" },
                    { icon: "", title: "Shaders", link: '/shaders' },
                    { icon: "", title: "Isometric Map", link: '/isometric-map' },
                    { icon: "", title: "Models", link: "/about" }
                ]
            }
        }
    }
</script>

<style scoped>
    .projects-container { margin-top: 20px }
    .project-link {
        cursor: pointer;
        text-decoration: none;
        color: black;
    }
    .project-link > span {
        display: block;
        font-size:11px;
        margin: 7px 0px 10px 0px;
        line-height: 1;
    }
</style>