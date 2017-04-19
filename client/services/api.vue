<script>
    import cookies from "./cookies.vue"
    import projects from "../data/projects.js"

    const TOKEN_COOKIE_NAME = 'api_token'

    export default {
        init (context) {
            this.http = context.http
            this.http.options.root = "/api"
        },
        getProjects () {
            return projects
        },
        getArticles () {
            return this.http.get('articles').then( response => response.data )
        },
    }
</script>