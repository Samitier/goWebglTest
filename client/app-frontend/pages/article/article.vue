<template>
    <div class="container h-center container-responsive">
        <header class="main-logo main-logo-sm col-12">
            <router-link to="/" class="btn">
                <h1>WebGL Rocks!</h1>
                <h2>A creative programming blog</h2>
                <div class="separator"></div>
            </router-link>
        </header>
        <article class="col-12">
            <h1>Heading One<small>Subtitle one</small></h1>
            <h2>Heading Two<small>Subtitle two</small></h2>
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
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3>Heading three</h3>
            <ul>
                <li>List item one </li>
                <li>List item two</li>
                <li>List item three</li>
            </ul>
            <p>A text with <a href="#"> a link.</a></p>
            <h4>Heading four</h4>
            <p>Some code</p>
            <code>
for(let i of something) {
    console.log("something" + i)
}
            </code>
        </article>
    </div>
</template>

<script>

    export default {
        components: {
        },
        data() {
            return {
                article: {}
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>

<style scoped>

    article {
        margin: 1em;
    }
</style>