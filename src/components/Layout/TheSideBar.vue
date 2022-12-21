<template>
    <div class="sidebar">
            <div class="sidebar__header">
               <div class="devices">
                   <img class="devices__img" src="../../assets/Icons/ic_IconThietBi.svg" alt="">
                   <h1 class="devices__title">Thiết bị</h1>
               </div>
               <div class="menu-bar">
                    
               </div>
            </div>
            <ul class="sidebar__list">
                <li class="sidebar-item">
                    <router-link to="/overview" class="sidebar-link" href="#">
                        <div class="image">
                            <img src="../../assets/Icons/ic_TongQuan.svg" alt="" id="icon-image" onclick="changeImage()">
                        </div>
                        <h1>Tổng quan</h1>
                    </router-link>
                </li>
                <li class="sidebar-item">
                    <router-link to="/device" class="sidebar-link" href="#">
                        <div class="image">
                            <img src="../../assets/Icons/ic_ThietBi.svg" alt="">
                        </div>
                        <h1>Thiết bị</h1>
                    </router-link>
                </li>
                <li class="sidebar-item">
                    <router-link to="/borrow" class="sidebar-link" href="#">
                        <div class="image">
                            <img src="../../assets/Icons/ic_MuonTra.svg" alt="">
                        </div>
                        <h1>Mượn trả</h1>
                    </router-link>
                </li>
                <li class="sidebar-item">
                    <router-link to="/report" class="sidebar-link" href="#">
                        <div class="image">
                            <img src="../../assets/Icons/ic_BaoCao.svg" alt="">
                        </div>
                        <h1>Báo cáo</h1>
                    </router-link>
                </li>
                <li class="sidebar-item">
                    <router-link to="setting" class="sidebar-link" href="#">
                        <div class="image">
                            <img src="../../assets/Icons/ic_HeThong.svg" alt="">
                        </div>
                        <h1>Hệ thống</h1>
                    </router-link>
                </li>
            </ul>
        </div>
</template>

<script>
export default {
    name:"TheSideBar"
}
</script>

<style scoped>
@import url(../../assets/css/layout/sidebar.css);
</style>