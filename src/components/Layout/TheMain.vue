<template>
    <div class="main">
        <TheHeader></TheHeader>
        <!-- <ThePage></ThePage> -->
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
// import ThePage from './ThePage.vue';
export default {
    name:"TheMain",
    components:{
        TheHeader
    }
}
</script>

<style scoped>
  @import url(../../assets/css/style.css);
</style>