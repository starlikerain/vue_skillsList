<template>
    <div class="hello">
        <div class="holder">
            <form class="form_height" @submit.prevent="addSkill">
                <!--from third part library animated.css-->
                <transition name="alert-in" enter-active-class="animated zoomIn"
                            leave-active-class="animated zoomOut">
                    <!--当 Vee-validate  error 时的反应-->
                    <p class="alert" v-show="errors.has('skill')">
                        {{errors.first("skill")}}
                    </p>
                </transition>



                <!--用户的技能 能力输入框-->
                <input type="text" placeholder="输入技能不少于2个字符" v-model="skill"
                       v-validate="'min:2'"
                       name="skill">
            </form>

            <ul>

                <!--from third part library animated.css-->
                <transition-group name="skillsList"
                                  enter-active-class="animated zoomIn"
                                  leave-active-class="animated zoomOut">
                    <!--技能列表-->
                    <li v-for="(data, index) in skills" :key="index">

                        <!--删除按钮-->
                        <span class="del_btn_span"><i class="iconfont icon-shanchu"
                                                      v-on:click="remove(index)"></i></span>
                        <span>{{data}}</span>
                    </li>
                </transition-group>
            </ul>

            <p>所有会的技能</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mySkills",
        data() {
            return {
                skill: "",
                skills: ["vuejs", "angular", "react"],
                check: true
            }
        },
        created: function () {
            if (!window.localStorage.vue_list_data) {
                this.skills = ["Vue.js", "angular", "react"]
            } else {
                this.skills = JSON.parse(window.localStorage.vue_list_data)
            }
        },
        updated: function () {
            window.localStorage.vue_list_data = JSON.stringify(this.skills)
        },
        methods: {
            addSkill: function () {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.skills.push(this.skill)
                        this.skill = ""
                    } else {
                        console.log("not valid")
                    }
                })
            },
            remove: function (id) {
                this.skills.splice(id, 1)
            }
        }
    }
</script>

<style scoped>
    @import "../assets/animate.css";
    @import "../assets/font-icons/iconfont.css";

    .form_height {
        height: 5rem;
        position: relative;
    }

    .holder {
        background: #fff;
    }

    ul {
        width: 50vw;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ul li {
        overflow: scroll;
        padding: 20px;
        font-size: 1.3em;
        background-color: #e0edf4;
        border-left: 5px solid #3eb3f6;
        margin-bottom: 2px;
        color: #3e5252;
    }

    p {
        text-align: center;
        padding: 30px 0;
        color: gray;
    }

    .container {
        box-shadow: 0px 0px 40px lightgray;
    }

    input {
        width: calc(100% - 40px);
        border: 0;
        padding: 20px;
        font-size: 1.3em;
        background-color: #323333;
        color: #687f7f;
    }

    .del_btn_span {
        margin-right: 0.3rem;
        position: relative;
        top: 1px;
    }

    .alert {
        position: absolute;
        top: -35px;
        background: #fdf2ce;
        font-weight: bold;
        display: inline-block;
        padding: 5px;
        /*margin-top: -20px;*/
    }

    .alert-in-enter-active {
        animation: bounce-in 0.3s;
    }

    .alert-in-leave-active {
        animation: bounce-in 0.3s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    i {
        cursor: pointer;
    }
</style>
