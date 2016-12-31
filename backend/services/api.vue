<script>
    export default {
        init (context) {
            this.http = context.http
            this.http.options.root = "/api/"
        },
        getProjects () {
            return this.http.get('projects').then( response => response.data )
        },
        getArticles () {
            return this.http.get('articles').then( response => response.data )
        }
    }
</script>