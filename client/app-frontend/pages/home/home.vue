<template>
    <div class="container h-center v-center fullscreen site-container">
        <div class="container main-ui-container">
            <header class="main-logo col-12" @mouseover="showInfo(-1)">
                <h1>WebGL Rocks!</h1>
                <h2>A creative programming blog</h2>
                <div class="separator"></div>
            </header>
            <transition name="hide-left">
                <div class="col-12 content-container container" v-show="renderMainMenu">
                    <nav class="main-menu col-5">
                        <a  v-for="(item, i) in menuItems" 
                            @mouseover="showInfo(i)" :class="{ active: showingInfo == i }" class="btn"> 
                            > {{ item }} 
                        </a>
                    </nav>
                    <div class="info-container col-7">
                        <div v-show="showingInfo==-1">
                            <social-links></social-links>
                        </div>
                        <div class="border-left" v-show="showingInfo==0">
                            <article-list></article-list>
                        </div>
                        <div class="border-left" v-show="showingInfo==1">
                            <project-list @select-project="selectProject"></project-list>
                        </div>
                        <div class="border-left" v-show="showingInfo==2">
                            <about-site></about-site>
                        </div>
                        <div class="border-left" v-show="showingInfo==3">
                            <about-author></about-author>
                        </div>
                    </div>  
                </div>
            </transition>
            <project-info 
                :project="selectedProject" 
                :is-rendered="renderProject"
                @unselect-project="unselectProject"
            ></project-info>
        </div>
        <div class="fullscreen fixed vignette"></div>
    </div>
</template>

<script>
    import ArticleList from './components/article-list'
    import ProjectList from './components/project-list'
    import AboutSite from './components/about-site'
    import AboutAuthor from './components/about-author'
    import SocialLinks from './components/social-links'
    import ProjectInfo from './components/project-info'

    export default {
        components: {
            ArticleList,
            ProjectList,
            AboutSite,
            AboutAuthor,
            SocialLinks,
            ProjectInfo
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
                selectedProject: {},
                renderMainMenu: false,
                renderProject: false
            }
        },
        mounted() {
            //delaying painting the main menu, for animation purposes
            setTimeout(()=> this.renderMainMenu = true, 800) 
        },
        methods: {
            showInfo(info) {
                if(this.renderMainMenu) this.showingInfo = info
            },
            selectProject(project) {
                this.renderMainMenu = false
                this.selectedProject = project
                this.renderProject = true
            },
            unselectProject() {
                //delaying painting the main menu, for animation purposes
                setTimeout(()=> this.renderMainMenu = true, 50) 
                this.renderProject = false
            }
        }
    }
</script>

<style scoped>
    .main-ui-container {
        width: 500px;
        height:500px;
    }
    .content-container { height:80% }
    .main-menu {
        padding-left:2em;
        margin-top:10%;
    }
    .main-menu > a {
        font-family: 'Droid Sans Mono', monospace;
        display: block;
        text-align: left;
        font-size:17px;
        padding: 0.5em 1em;
        margin: 1em auto;
        position: relative;
        color: #ddd;
    }
    .main-menu > a:hover, .main-menu > a.active { color: black } 
    .main-menu > a.active:after {
        position:absolute;
        right:0px;
        top:0.85em;
        content:""; 
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent; 
        border-right: 4px solid black; 
    }
    .info-container { 
        margin-top:5%;
        margin-bottom:auto;    
        opacity:0;
    }
    .info-container>div {
        padding-left: 1.5em;
        height:100%;
        line-height:1.4;
        font-size:15px;
    }
    .border-left { border-left: 1px solid black }
    .fullscreen.vignette { z-index: -1 }

    /*  //// ANIMATIONS //// */

    .fullscreen.vignette { animation: fadeIn 1.5s }
    .main-logo { 
        opacity: 0;
        animation: fadeIn 1.5s 0.5s forwards;
    }
    .main-menu > a {
        transition: color 0.4s;
        opacity: 0;
        animation: fadeIn 0.4s forwards;
    }
    .main-menu > a:nth-child(1) { animation-delay: 0s }
    .main-menu > a:nth-child(2) { animation-delay: 0.1s }
    .main-menu > a:nth-child(3) { animation-delay: 0.2s }
    .main-menu > a:nth-child(4) { animation-delay: 0.3s }
    .info-container { animation: fadeIn 0.7s 0.4s forwards }
    .info-container>div { animation: fadeInDown 0.5s }

    /* /// TRANSITIONS /// */

    .hide-left-leave-active {
        transition: opacity .3s, transform .3s;
    }
    .hide-left-leave-active {
        opacity: 0;
        transform: translateX(-50%);
    }
</style>