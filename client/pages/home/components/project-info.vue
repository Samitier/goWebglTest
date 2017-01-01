<template>
    <transition name="appear-from-below">
        <div class="col-8 project-info-container text-center" v-show="isRendered">
            <i class="category-icon">{{ project.icon }}</i>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-links-container">
                <a class="btn">Code</a>
                <a class="btn">Articles</a>
                <a class="btn">Result</a>
            </div>
            <a class="btn go-back" @click="unselectProject()"> &larr; go back </a>
        </div> 
    </transition>
</template>

<script>
    export default {
        components: {},
        props: ['project', 'isRendered'],
        data() {
        },
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
        margin: 2.5em auto 0 auto;
    }
    h3 {
        font-weight: bold;
    }
    p {
        color: #555;
        line-height: 1.4;
        font-size: 14px;
    }
    .go-back {
        margin: 1.5em 0;
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