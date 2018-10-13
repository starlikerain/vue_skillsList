<template>
    <div class="about">
        <h1>This is about page</h1>
        <p>Hello {{this.name}} ！！！</p>
        <p>Url 接受传参{{this.urlString}}</p>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                name: this.$route.params.name,
                urlString: "http://localhost:8080/#/about/{{name}}"
            }
        },
        created: function () {
            if (!this.$route.params.name) {
                this.name = "『StarLikeRain』"

            }


        }
    }
</script>

<style scoped>

</style>