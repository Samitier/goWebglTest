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
    import api from 'services/api'

    export default {
        components: {
        },
        props: ['selectedProject'],
        data() {
            return {
                projects: []
            }
        },
        created() {
            api.getProjects().then( projects => this.projects = projects )
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
        text-align:center;
    }
    .category-icon { margin:auto }
    .category-icon, .project-link span { transition: transform 0.3s }
    .project-link:hover span { transform: translateY(2px) }
    .project-link:hover .category-icon {
        transform: scale(1.15);
    }
</style>