<template>
    <div class="container h-center v-center fullscreen">
        <div class="container main-ui-container">
            <header class="main-title col-12">
                <h1>WebGL Rocks!</h1>
                <h2>A creative programming blog</h2>
                <div class="separator"></div>
            </header>
            <nav class="col-5">
                <a v-for="(item, i) in menuItems" @mouseover="showInfo(i)" :class="{ active: showingInfo == i }"> 
                    > {{ item }} 
                </a>
            </nav>
            <main class="col-7">
                <div v-if="showingInfo==0">
                    <article-list></article-list>
                </div>
                <div v-if="showingInfo==1">
                    <project-list></project-list>
                </div>
                <div v-if="showingInfo==2">
                    <about-site></about-site>
                </div>
                <div v-if="showingInfo==3">
                    <about-author></about-author>
                </div>
            </main>   
        </div>
        <div class="fullscreen fixed vignette"></div>
    </div>
</template>

<script>
    import ArticleList from './components/article-list.vue'
    import ProjectList from './components/project-list.vue'
    import AboutSite from './components/about-site.vue'
    import AboutAuthor from './components/about-author.vue'

    export default {
        components: {
            ArticleList,
            ProjectList,
            AboutSite,
            AboutAuthor
        },
        data() {
            return {
                showingInfo: -1,
                menuItems: [
                    "Articles",
                    "Projects",
                    "This site",
                    "The author"
                ]
            }
        },
        methods: {
            showInfo(info) {
                this.showingInfo = info
            }
        }
    }
</script>

<style scoped>
    .main-ui-container {
        width: 500px;
        height:500px;
    }
    h1 {
        font-family: 'Quicksand', sans-serif;
        text-align: center;
        font-size: 70px;
        margin:5px;
    }
    h2 {
        font-family: 'Quicksand', sans-serif;
        text-align: center;
        font-size:29px;
        margin:0;
    }
    h1,h2 { line-height: 1 }
    .separator {
        width:50px;
        margin: auto;
        margin-top:2em;
        border-top:1px solid #444444;
    }
    nav {
        padding-left:2em;
        height:80%;
        margin-top:10%;
    }
    nav > a {
        font-family: 'Droid Sans Mono', monospace;
        display: block;
        text-align: left;
        text-decoration: none;
        color: black;
        font-size:17px;
        padding: 0.5em 1em;
        margin: 1em auto;
        position: relative;
        color: #ddd;
        cursor:pointer;
    }
    nav > a:hover, nav > a.active { color: black } 
    nav > a.active:after {
        position:absolute;
        right:0px;
        top:0.85em;
        content:""; 
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent; 
        border-right: 4px solid black; 
    }
    main { 
        margin-top:5%;
        margin-bottom:auto;    
    }
    main>div {
        border-left: 1px solid black;
        padding-left: 1.5em;
        height:100%;
        line-height:1.4;
        font-size:15px;
    }
    .fullscreen.vignette { z-index: -1 }

    /*  //// ANIMATIONS //// */

    .fullscreen.vignette { animation: fadeIn 1.5s }
    .main-title { 
        opacity: 0;
        animation: fadeIn 1.5s 0.5s forwards;
    }
    nav > a {
        transition: color 0.4s;
        opacity: 0;
        animation: fadeIn 0.4s forwards;
    }
    nav > a:nth-child(1) { animation-delay: 0.8s }
    nav > a:nth-child(2) { animation-delay: 0.9s }
    nav > a:nth-child(3) { animation-delay: 1.0s }
    nav > a:nth-child(4) { animation-delay: 1.1s }
    main>div { animation: fadeInDown 0.5s }
</style>