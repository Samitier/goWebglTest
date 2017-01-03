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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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