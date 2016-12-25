<template>
    <div>
        <div class="fullscreen fixed vignette"></div>
        <main class="main-ui-container">
            <h1>
                WebGL Rocks!<br>
                <small>A creative programming blog</small>
            </h1>
            <div class="separator"></div>
            <nav>
                <a href="">> Articles</a>
                <a href="">> Projects</a>
                <a href="">> This site</a>
                <a href="">> The author</a>
            </nav>
            <details>

            </details>  
        </main>
    </div>
</template>

<script>

 export default {
        components: {
        },
        created() {
        }
    }
</script>

<style scoped>

    .main-ui-container {
        width: 500px;
        margin: auto;
        transform: translateY(46%);
        text-align:center;
    }
    h1 {
        font-family: 'Quicksand', sans-serif;
        text-align: center;
        display:block;
        width: 100%;
        font-size: 70px;
        line-height: 0.6;
    }
    h1 > small {
        font-size:29px;
    }
    a {
        font-family: 'Droid Sans Mono', monospace;
        width: 90%;
        display: block;
        text-align: left;
        text-decoration: none;
        color: black;
        font-size:17px;
        padding: 0.5em 1em;
        margin: 1em auto;
    }
    .separator {
        width:50px;
        padding-bottom:3em;
        margin:auto;
        border-top:1px solid #444444;
    }
    nav {
        display:inline
    }
</style>