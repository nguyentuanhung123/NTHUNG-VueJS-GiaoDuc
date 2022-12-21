<template>
    <div class="container">
        <TheSideBar></TheSideBar>
        <TheMain></TheMain>
    </div>
</template>

<script>
import TheSideBar from './TheSideBar.vue';
import TheMain from './TheMain.vue';
export default {
    name:"TheContainer",
    components:{
        TheSideBar,TheMain
    }
}
</script>

<style scoped>
   @import url(../../assets/css/style.css);
</style>