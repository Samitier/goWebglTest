<template>
    <transition name="appear-from-below">
        <div class="col-8 project-info-container text-center" v-show="isRendered">
            <i class="category-icon">{{ project.icon }}</i>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-links-container">
                <a :href="project.repositoryLink" class="btn">Code</a>
                <router-link :to="'/search?category=' + project.slug" class="btn">Articles</router-link>
                <a v-if="project.resultLink" :href="project.resultLink" class="btn">Result</a>
                <router-link v-if="!project.resultLink" :to="'/' + project.slug" class="btn">Result</router-link>
            </div>
            <a class="btn go-back" @click="unselectProject()"> &larr; go back </a>
        </div> 
    </transition>
</template>

<script>
    export default {
        components: {},
        props: ['project', 'isRendered'],
        methods: {
            unselectProject() {
                this.$emit('unselect-project')
            }
        }
    }
</script>

<style scoped>
    .category-icon {
        transform: scale(1.5);
        margin: 2.5em auto 1.5em auto;
    }
    h3 {
        font-weight: bold;
    }
    p {
        line-height: 1.4;
        font-size: 13px;
    }
    .go-back {
        margin: 1em 0;
        display: block;
        font-size: 14px;
        opacity: 0.8;
        padding: 0.5em;
        transition: opacity 0.3s;
    }
    .go-back:hover { opacity: 0.5 }
    .project-info-container  { 
        height:80%; 
        margin:auto; 
    }
    .project-links-container { margin-top: 1.5em }
    .project-links-container > a{
        border: 1px solid black;
        font-size: 13px;
        margin: 1em;
        padding: 0.4em 1em 0.2em 1em;
        transition: color 0.4s, background-color 0.4s;
    }
    .project-links-container > a:hover {
        background-color: #555;
        color: white;
    }

    /* /// TRANSITIONS /// */

    .appear-from-below-enter-active {
        transition: opacity .3s .3s, transform .3s .3s;
    }
    .appear-from-below-enter {
        opacity: 0;
        transform: translateY(50%);
    }
</style>