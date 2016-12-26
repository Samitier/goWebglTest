<template>
    <div class="container h-center v-center fullscreen">
        <div class="container main-ui-container">
            <header class="main-title row-12">
                <h1>WebGL Rocks!</h1>
                <h2>A creative programming blog</h2>
                <div class="separator"></div>
            </header>
            <nav class="row-5">
                <a v-for="(item, i) in menuItems" @mouseover="showInfo(i)" :class="{ active: showingInfo == i }"> 
                    > {{ item }} 
                </a>
            </nav>
            <main class="row-7">
                <div v-if="showingInfo==0">
                    <h3>Latest articles</h3>
                    <div class="container projects-container">
                        <article v-for="article in articles">
                            <i>x</i>
                            <header>{{ article.title }}</header>
                            <div></div>
                        </article>
                    </div>
                </div>
                <div v-if="showingInfo==1">
                    <h3>Finished projects</h3>
                    <div class="container projects-container">
                         <a class="project-link text-center" v-for="project in projects" :href="project.link">
                            <i>X</i>
                            <span>{{ project.title }}</span>
                         </a>           
                    </div>
                </div>
                <div v-if="showingInfo==2">
                    <h3>About this site</h3>
                    <p>
                        Webgl.rocks is an excuse for sharing with you what I learn in my small pet projects about WebGL
                        and front-end design.
                    </p>
                    <p>
                        The site is divided in two categories: <b>articles</b>, where I describe how I code, and
                        <b>projects</b>, where the finished results will be.
                    </p>
                    <p>
                        Everything in this site is avaliable on <a href="https://github.com/">Github</a>. 
                        If you want to contribute, please do it. The best way of learning is learning together.
                    </p>
                </div>
                <div v-if="showingInfo==3">
                    <h3>About the author</h3>
                    <p>
                        Hi, my name is Blai Samitier. I'm a software engineer from Barcelona. I love front-end development, 
                        UI/UX design and programming videogames.
                    </p>
                    <p>
                        
                    </p>
                </div>
            </main>   
        </div>
        <div class="fullscreen fixed vignette"></div>
    </div>
</template>

<script>

 export default {
        components: {
        },
        data() {
            return {
                showingInfo: -1,
                menuItems: [
                    "Articles",
                    "Projects",
                    "This site",
                    "The author"
                ],
                projects: [
                    { title: "Shaders", link: '/shaders' },
                    { title: "Isometric Map", link: '/isometric-map' },
                    { title: "Models", link: "/about" }
                ]
            }
        },
        created() {
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
    main>div>h3 {
        font-size:30px;
        margin:0;
        margin-bottom: -10px;
    }
    .projects-container { margin-top: 10px }
    .project-link {
        margin:5px;
        cursor: pointer;
    }
    .project-link > i {
        display:block;
        width: 50px;
        height: 50px;
        border: 2px solid black;
    }
    .project-link > span {
        display: block;
        font-size:11px;
        margin-top:5px;
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
    main>div {
        animation: fadeInDown 0.5s;
    }
</style>