<template>
    <div>
        <h3 class="section-heading">Latest articles</h3>
        <div class="container articles-container">
            <a v-for="article in articles" class="article-link col-12 container">
                <i class="category-icon col-3">{{ article.icon }}</i>
                <div class="col-9 article-info">
                    <h4>{{ article.title }}</h4>
                    <span>{{ article.excerpt }}</span>
                </div>
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
                articles: [
                    { icon: "", title: "Shaders", excerpt: "Lorem ipsum dolor sit amet", link: '/shaders' },
                    { icon: "", title: "Isometric Map", excerpt: "Lorem ipsum dolor sit amet", link: '/isometric-map' },
                    { icon: "", title: "Models", excerpt: "Lorem ipsum dolor sit amet", link: "/about" }
                ]
            }
        }
    }
</script>

<style scoped>
    .articles-container { margin-top: 20px }
    .article-link {
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
    h4 {
        font-size: 16px;
        margin: 0;
        font-weight: bold;
    }
</style>