<template>
    <div class="container h-center container-responsive">
        <nav class="main-logo-topbar col-12">
            <router-link to="/" class="btn">
                <h1>WebGL Rocks! <small>A creative programming blog</small></h1>
                <div class="separator"></div>
            </router-link>
        </nav>
        <article class="col-12">
            <header class="article-heading">

            </header>
            <body class="article-body">
            <h1>Heading One</h1>
            <h2>Heading Two</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua.</i> <u>Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.</u> <b>Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</b> 
            Excepteur sint occaecat cupidatat non proident, <code>let someInlineCode = 0</code> sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <blockquote>
                <p>
                    Now, you've settled on the opposite side of the paper to me. I can see your traces that soak through the fiber, the pulp vegetation. 
                    And when we bocame waterlogged and the cage desintegrates we will intermingle. And when this paper aeroplane leaves the cliff edge, we will come together.
                </p>
            </blockquote>
            <h3>Heading three</h3>
            <ul>
                <li>List item one </li>
                <li>List item two</li>
                <li>List item three</li>
            </ul>
            <p>A text with <a href="#"> a link.</a></p>
            <h4>Heading four</h4>
            <p>Some code</p>
            <pre><code>
for(let i of something) {
    console.log("something" + i)
}
            </code></pre>
            {{
                article.body | markdown
            }}
            </body>
        </article>
    </div>
</template>

<script>
    import markdown from "filters/markdown"
    
    export default {
        components: {
        },
        data() {
            return {
                article: { body:`
                    # header one in markdown
                    ## header two in markdown
                ` }
            }
        },
        mounted() {
        },
        methods: {
        },
        filters: markdown
    }
</script>

<style scoped>
    article {
        margin: 1em;
    }
    .article-heading {
        position: absolute;
        height: 300px;
        overflow: hidden;
        left: 0px;
        right: 0px;
        background: url('/assets/img/article-header-test.png') fixed;
        box-shadow: inset 0px 0px 3px 1px rgba(0,0,0,0.27);
    }
    .article-body {
        margin-top: 350px;
    }
</style>