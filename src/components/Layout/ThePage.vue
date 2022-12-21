<template>
    <div class="page">
                <div class="toolbar">
                    <div class="toolbar__search">
                       <div class="toolbar__search-input">
                          <input type="text" id="name">
                        </div>
                        <div class="toolbar__search-icon">
                           <label for="name">
                               <img src="../../assets/Icons/Ic_seerch.png" alt="">
                           </label>
                        </div>
                    </div>
                    <div class="toolbar__buttons">
                        <button id="btn-add" class="btn btn--add-teacher" @click="btnAddOnClick">Thêm</button>
                        <button class="btn">Xuất khẩu</button>
                        <button class="btn btn-image"></button>
                    </div>
                </div>
                <div class="paging">
                    <div class="table">
                        <table id="teacher">
                            <thead>
                                <tr>
                                    <th class="text-align--center">
                                        <img src="../../assets/Icons/ic_Checkbox_Inactive.png" alt="">
                                    </th>
                                    <th class="text-align--center">
                                        Số hiệu cán bộ
                                    </th>
                                    <th class="text-align--center">
                                        Họ và tên
                                    </th>
                                    <th class="text-align--center">
                                        Số điện thoại
                                    </th>
                                    <th class="text-align--center">
                                        Tổ chuyên môn
                                    </th>
                                    <th class="text-align--center">
                                        QL theo môn
                                    </th>
                                    <th class="text-align--center">
                                        QL kho,phòng
                                    </th>
                                    <th class="text-align--center">
                                        Đào tạo QLTB
                                    </th>
                                    <th class="text-align--center">
                                        Đang làm việc
                                    </th>
                                    <th>
    
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in employees" :key="index">
                                    <td class="text-align--center">
                                        <img src="../../assets/Icons/ic_Checkbox_Inactive.png" alt="">
                                    </td>
                                    <td class="text-align--left">
                                        {{item.EmployeeCode}}
                                    </td>
                                    <td class="c-aside">
                                        {{item.FullName}}
                                    </td>
                                    <td class="text-align--center">
                                        {{item.PhoneNumber}}
                                    </td>
                                    <td>
                                        Tổ Toán - Tin
                                    </td>
                                    <td>
                                        Lý
                                    </td>
                                    <td>
                                        Phòng Tin , phòng TN Hoá học
                                    </td>
                                    <td class="text-align--center">
                                        <img src="../../assets/Icons/ic_Check.png" alt="">
                                    </td>
                                    <td class="text-align--center">
                                        <img src="../../assets/Icons/ic_Check.png" alt="">
                                    </td>
                                    <td class="flexSB">
                                        <div class="icon__edit">
                                            <img src="../../assets/Icons/ic_Edit.png" alt="" tabindex="0" @click="editData(item.EmployeeId)">
                                        </div>
                                        <div class="icon__delete">
                                            <img src="../../assets/Icons/ic_Remove.png" alt="" tabindex="0" @click="deleteData(item.EmployeeId)">
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="pagionation">
                        <ul class="pagination-list">
                            <li class="pagination-item">
                                <a href="#">
                                   <img src="../../assets/Icons/ic_MoveToFirst.png" alt="">
                                </a>
                            </li>
                            <li class="pagination-item">
                                <a href="#">
                                    <img src="../../assets/Icons/ic_Back.png" alt="">
                                </a>
                            </li>
                            <li class="pagination-item number">
                                <a href="#">1</a>
                            </li>
                            <li class="pagination-item">
                                <a href="#">
                                    <img src="../../assets/Icons/ic_Next.png" alt="">
                                </a>
                            </li>
                            <li class="pagination-item">
                                <a href="#">
                                    <img src="../../assets/Icons/ic_MoveToLast.png" alt="">
                                </a>
                            </li>
                        </ul>
                        <span>1/2 trang</span>
                        <span>(56 giáo viên)</span>
                    </div>
                </div>
            </div>
        <EmployeeDetail v-if="showDetail" :teacherId="teacherIdSelected" @onClose="onCloseDetail"></EmployeeDetail>
        <TheDialogDelete v-if="showDialog" @onCloseDialog="onDialogDeleteClose"></TheDialogDelete>
</template>

<script>
    import EmployeeDetail from '@/views/employee/EmployeeDetail.vue'; 
    import TheDialogDelete from '@/views/dialog/TheDialogDelete.vue';
    import axios from "axios"
    export default {
        name:"ThePage",
        components:{
            EmployeeDetail,
            TheDialogDelete
        },
        created(){
            //thực hiện load dữ liệu
            this.loadData();
        },
        methods:{
            /**
             * Load dữ liệu
             *              
             **/
            loadData(){
                //Gọi API:
                axios.get("https://cukcuk.manhnv.net/api/v1/employees")
                    .then(res=>{
                        this.employees = res.data;
                    })
                    .catch(error=>{
                        console.log(error);
                    })
                //Gán dữ liệu
                //Hiển thị lỗi nếu có
            },
            /**
            * Hiển form thêm mới dữ liệu
            * Author : NTHUNG
            */
            btnAddOnClick(){
                try{
                    this.showDetail = true;
                }
                catch(e){
                    console.log(e);
                }
            }, 
            /**
            * Đóng form thêm mới dữ liệu
            * Author : NTHUNG
            */
            onCloseDetail(){
                try{
                    this.showDetail = false;
                    //Load lại dữ liệu
                    this.loadData()
                }
                catch(e){
                    console.log(e);
                }
            },

            /**
             * Edit data
             * 
             */
            editData(id){
                try{
                    this.teacherIdSelected = id;
                    console.log("Edit item : ",this.teacherIdSelected);
                    this.showDetail = true;
                }
                catch(e){
                    console.log(e);
                }
            },

            /**
             * Delete Data 
             * author : NTHUNG
             */
            deleteData(id){
                try{
                    // this.showDialog = true;
                    // console.log(id);
                    axios.delete('https://cukcuk.manhnv.net/api/v1/employees/'+id)
                        .then(() => this.loadData())
                }
                catch(e){
                    console.log(e);
                }
            },
            /**
             * Đóng Dialog 
             *
             */
            onDialogDeleteClose(){
                try{
                    this.showDialog = false;
                }
                catch(e){
                    console.log(e);
                }
            }
        },
        data(){
            return{
                employees:[],
                showDetail:false,
                showDialog:false,
                teacherIdSelected: {},
            }
        }
    }
</script>

<style scoped>
  @import url(../../assets/css/layout/page.css);
</style>