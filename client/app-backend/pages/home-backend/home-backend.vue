<template>
    <main class="container">
        <a class="btn logout" @click="logout()">(Logout)</a>
        <div class="main-logo col-12">
            <h1>WebGL Rocks!</h1>
            <h2>[The backend]</h2>
        </div>
        <div class="col-7 content articles-container">
            <h2>
                Articles
                <a href="" class="btn add-new" title="Add new article">+</a>
            </h2>
            <ul>
                <li v-for="article in articles"><a>{{ article.title }}</a></li>
            </ul>
        </div>
        <div class="col-1"></div>
        <div class="col-4 content projects-container">
            <h2>
                Projects
                <a href="" class="btn add-new" title="Add new project">+</a>
            </h2>
            <ul>
                <li v-for="project in projects"><a>{{ project.title }}</a></li>
            </ul>
        </div>
    </main>
</template>

<script>
    import api from 'services/api'

    export default {
        components: {
        },
        data() {
            return {
                projects: [],
                articles: []
            }
        },
        created() {
            api.getArticles().then( articles => this.articles = articles )
            api.getProjects().then( projects => this.projects = projects )
        },
        methods: {
            logout() {
                api.logout().then( () => this.$router.push({ name: 'login' }))
            }
        }
    }
</script>

<style scoped>
    main {
        width: 800px;
        margin: auto;
    }
    .logout {
        color: #BBB;
        position: absolute;
        right: 2em;
        top: 1em;
    }
    .logout:hover { opacity: 0.5 }
    .main-logo { padding: 5em }
    .content {
        padding:2em;
        padding-top:.5em;
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
    }
    .articles-container {
        background-color: rgb(255, 232, 239);
    }
    .projects-container {
        background-color: rgb(232, 255, 243);
    }
    .content h2 {
        font-size:30px;
    }
    .add-new {
        float: right;
        font-weight: bold;
    }
    .add-new:hover{
        opacity:0.6;
    }
</style>