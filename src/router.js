import Vue from "vue"
import Router from "vue-router"
import mySkills from "./components/mySkills.vue"
import About from "./components/About.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "mySkills",
            component: mySkills
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/about/:name",
            name: "About",
            component: About
        }
    ]
})