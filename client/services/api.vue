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
                cookies.set(TOKEN_COOKIE_NAME, response.data.token, true)
                this.http.headers.common['wgl-access-token'] = response.data.token
                return response.data
            })
        },
        logout() {
            this.http.headers.common['wgl-access-token'] = ""
            return Promise.resolve(cookies.delete(TOKEN_COOKIE_NAME))
        },
        getApiToken() {
            return cookies.get(TOKEN_COOKIE_NAME)
        },
        getProjects () {
            return this.http.get('projects').then( response => response.data )
        },
        getArticles () {
            return this.http.get('articles').then( response => response.data )
        },
    }
</script>