<script>
    import cookies from "./cookies.vue"

    const TOKEN_COOKIE_NAME = 'api_token'

    export default {
        init (context) {
            this.http = context.http
            this.http.options.root = "/api"
        },
        login(password) {
            return this.http.post('login', { password }).then( response => {
                cookies.set("api_token", response.data.token, true)
                return response.data
            })
        },
        getApiToken() {
            return cookies.get('api_token')
        },
        getProjects () {
            return this.http.get('projects').then( response => response.data )
        },
        getArticles () {
            return this.http.get('articles').then( response => response.data )
        },
    }
</script>