<template>
    <div id="app">
        <img class="vueLogo" alt="Vue logo" src="https://starlikerain.github.io/vue_skillsList/dist/img/logo.82b9c7a5.png">
        <nav>
            <router-link to="/">主页</router-link>
            <router-link to="/about">关于</router-link>
        </nav>

        <transition>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    import Skills from "./components/mySkills.vue"
    import About from "./components/About"

    export default {
        name: "app",
        components: {
            Skills,
            About
        }
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

    body {
        font-family: "Montserrat", sans-serif;
        display: grid;
        grid-template-rows: auto;
        justify-items: center;
        padding-top: 50px;
        background-image: url("./assets/底层背景.png");
    }

    body,
    html {
        margin: 0;
        height: 100%;
    }

    #app {
        width: 50%;
        /*border: 2px solid #45a8ef;*/
        background-color: rgba(69,168,239,0.1);
        border-radius: 1rem;
        padding: 3rem;
    }

    #app .vueLogo {
        width: 3rem;
    }

    nav {
        padding: 20px 20px 20px 0;
    }

    nav a {
        padding: 10px;
        text-decoration: none;
        background: #fff;
        border-radius: 3px;
        color: rgb(0, 110, 255);
        font-weight: bold;
        margin-right: 15px;
    }
</style>
