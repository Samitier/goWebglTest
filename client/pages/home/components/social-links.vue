<template>
    <nav class="social-links-container">
        <a href="https://github.com/Samitier/webgl.rocks" title="Github" class="btn">
            <i class="icon-github-circled"></i>
        </a>
        <a href="https://www.linkedin.com/in/samitier" title="Linkedin" class="btn">
            <i class="icon-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCjI7xjQrVNpVbXngJEimwSQ" title="Youtube" class="btn">
            <i class="icon-youtube"></i>
        </a>
        <a href="http://stackoverflow.com/users/story/6527598" title="Stack Overflow" class="btn">
            <i class="icon-stackoverflow"></i>
        </a>
        <a href="http://samitier.azurewebsites.net/" title="Guestbook" class="btn">
            <i class="icon-mail"></i>
        </a>
    </nav>
</template>

<script>
    export default {
        components: {
        }
    }
</script>

<style scoped>
    .social-links-container {
        padding-left: 1.5em;
        padding-top: 8em
    }
    a {
        color: #ccc;
        width: 28px;
        font-size: 18px;
        height: 28px;
        line-height: 1.7;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid #ccc;
        opacity:0.7;
        transition: color 0.5s, border-color 0.5s, background-color 0.5s;
    }
    a:hover {
        color: white;
        border-color: #444;
        background-color: #444;
    }
</style>