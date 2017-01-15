<template>
    <transition name="fade">
        <router-view></router-view>
    </transition>
</template>

<script>
    export default {
        components: {}
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>