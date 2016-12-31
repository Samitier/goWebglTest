<template>
    <main class="container">
        <div class="main-logo col-12">
            <h1>WebGL Rocks!</h1>
            <h2>[The backend]</h2>
        </div>
        <div class="col-12 text-center">
            <h3> Who are you? </h3>   
            <input class="input-text inline-block" v-model="password" type="password">
            <i :class="{ show: password != '' }" class="btn icon-ok"></i>
        </div>
    </main>
</template>

<script>
    import api from '../../services/api.vue'

    export default {
        components: {
        },
        data() {
            return {
                password: "",
            }
        },
        created() {
        },
        methods: {
            submit() {
                api.login(password).then(
                    ok => console.log(this)
                )
            }
        }
    }
</script>

<style scoped>
    main {
        width: 800px;
        margin: auto;
    }
    .main-logo { padding: 5em }
    input { margin-left: 2em; }
    i { 
        opacity: 0;
        transition: opacity 0.3s;
    }
    .show { opacity: 1 }
</style>