import Vue from "vue"
import App from "./App.vue"
import veeValidate from "vee-validate"
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import VueI18n from 'vue-i18n';   // 为了vee-validate 支持中文
import router from './router' // 艹了，这里不能写其他别名，坑爹呢！
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zh_CN',
})

Vue.use(veeValidate, {
    i18n,
    i18nRootKey: 'validation',
    dictionary: {
        zh_CN
    }
});



Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
