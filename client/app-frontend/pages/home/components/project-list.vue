<template>
    <div>
        <h3 class="section-heading">Finished projects</h3>
        <div class="container projects-container">
            <a class="btn project-link col-3" v-for="project in projects" @click="selectProject(project)">
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
        props: ['selectedProject'],
        data() {
            return {
                projects: [
                    { 
                        icon: "", 
                        title: "Shaders", 
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  
                        repository: "github.com",
                        link: '/shaders' 
                    },
                    { icon: "", title: "Isometric Map", link: '/isometric-map' },
                    { icon: "", title: "Models", link: "/about" },
                    { icon: "", title: "Shaders", link: '/shaders' },
                    { icon: "", title: "Isometric Map", link: '/isometric-map' },
                    { icon: "", title: "Models", link: "/about" }
                ]
            }
        },
        methods: {
            selectProject(project) {
                this.$emit('select-project', project)
            }
        }
    }
</script>

<style scoped>
    .projects-container { margin-top: 20px }
    .project-link > span {
        display: block;
        font-size:11px;
        margin: 7px 0px 10px 0px;
        line-height: 1;
    }
    .category-icon, .project-link span { transition: transform 0.3s }
    .project-link:hover span { transform: translateY(2px) }
    .project-link:hover .category-icon {
        transform: scale(1.15);
    }
</style>