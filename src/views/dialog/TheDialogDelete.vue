<template>
    <div class="dialog">
        <div class="dialog-container dialog-delete">
            <div class="dialog__button" @click="onDialogDeleteClose">
                <img src="../../assets/Icons/ic_X_2.png" alt="">
            </div>
            <div class="dialog__title">
                Thông báo
            </div>
            <div class="dialog__content">
                Bạn có chắc chắn muốn xoá cán bộ giáo viên đang chọn không ?
            </div>
            <div class="dialog__footer">
                <button class="btn btn-default bg--green">Đồng ý</button>
                <button class="btn btn-default">Đóng</button>
            </div>
        </div>
    </div>
</template>

<script>

 export default{
    name:"TheDialogDelete",

    data(){
        return{

        }
    },
    created(){

    },
    methods:{
        onDialogDeleteClose(){
            try{
                this.$emit("onCloseDialog");
            }
            catch(e){
                console.log(e);
            }
        },
    }
 }
</script>

<style scoped>
    @import url(../../assets/css/base/dialog.css);
    @import url(../../assets/css/base/button.css);
</style>