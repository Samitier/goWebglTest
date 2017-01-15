<template>
    <div>
        <h3 class="section-heading">Latest articles</h3>
        <div class="container articles-container">
            <router-link :to="'/a/'+article.slug" v-for="article in articles" class="btn article-link col-12 container">
                <i class="category-icon col-3">{{ article.icon }}</i>
                <div class="col-9 article-info">
                    <h4>{{ article.title }}</h4>
                    <time>{{ article.createdAt | ddmmyydate }}</time>
                    <span>{{ article.summary }}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import ddmmyydate from 'filters/ddmmyydate'
    import api from 'services/api'

    export default {
        components: {
        },
        data() {
            return {
                articles: []
            }
        },
        created() {
            api.getArticles().then( articles => this.articles = articles )
        },
        filters: ddmmyydate
    }
</script>

<style scoped>
    .articles-container { margin-top: 20px }
    .article-link {
        position: relative;
        color: black;
        margin-bottom: 1em;
        cursor: pointer;
        transition: transform 0.3s;
    }
    .article-link:hover {
        transform:translateX(10px);
    }
    .article-info {
        margin:auto;
    }
    time {
        position: absolute;
        top:3px;
        right:0;
        font-size:12px;
        color: #999;
    }
    h4 {
        font-size: 16px;
        margin: 0;
        font-weight: bold;
    }
</style>