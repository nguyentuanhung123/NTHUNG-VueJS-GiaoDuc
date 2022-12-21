<template>
    <!--Thông tin chi tiết giảng viên-->
    <div id="popup-teacher-detail" class="popup">
        <div class="popup-container">
            <div id="btn-close" class="popup__button" @click="onCloseDetail">
                <img src="../../assets/Icons//ic_X_2.png" alt="">
            </div>
            <div class="form-row" style="height: 100%;">
                <div class="form-avatar">
                    <a class="form-avatar__image">
                       <img src="../../assets/Icons/User-avatar.svg.png" alt="">
                       <div class="image-text text-align--center">Chọn ảnh</div>
                    </a>
                    <div class="form-avatar__detail">
                        <p class="form-avatar__detail-FullName text-align--center">Họ và tên</p>
                        <p class="form-avatar__detail-code text-align--center">Số hiệu cán bộ</p>
                    </div>
                </div>
                <div class="form-detail flex-1">
                    <div class="form-detail__body">
                        <div class="form-row">
                            <h1 class="form-detail__title">Thêm hồ sơ Cán bộ , giáo viên.</h1>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <div class="m-row">
                                    <div class="m-col w-100">
                                        <div class="input-wrapper">
                                            <label for="txtTeacherCode" class="input__label">Số hiệu cán bộ <span class="required">*</span></label>
                                            <input id="txtTeacherCode" 
                                            v-model="newTeacher.EmployeeCode" 
                                            v-bind:class="{'input--error':errors.EmployeeCode}" 
                                            @blur="validate()" 
                                            field-label="Số hiệu cán bộ" 
                                            type="text" 
                                            class="input" 
                                            ref="txtTeacherCode"
                                            style="max-width: 170px">
                                            <!-- Thêm class input--error nếu errors.EmployeeCode có dữ liệu -->
                                            <div class="error-text" v-if="errors.EmployeeCode">
                                                {{ errors.EmployeeCode }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="m-row">
                                    <div class="m-col w-100">
                                        <div class="input-wrapper">
                                            <label for="" class="input__label">Số điện thoại</label>
                                            <input type="text" 
                                            class="input" 
                                            style="max-width: 170px">
                                        </div>
                                    </div>
                                </div>
                                <div class="m-row">
                                    <div class="m-col w-100">
                                        <div class="input-wrapper">
                                            <label for="" class="input__label">Tổ bộ môn</label>
                                            <!-- <input type="text" class="input" style="max-width: 170px"> -->
                                            <select id="" class="combobox" style="max-width: 170px">
                                                <option value="1">Tổ Toán - Tin</option>
                                                <option value="2">Tổ Lý - Hoá</option>
                                                <option value="3">Tổ Sinh - Sử - Địa</option>
                                                <option value="4">Tổ Anh Văn</option>
                                                <option value="5">Tổ Ngữ Văn</option>
                                                <option value="6">Tổ Văn Phòng</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="m-row">
                                    <div class="m-col w-100">
                                        <div class="input-wrapper">
                                            <label for="txtTeacherName" class="input__label">Họ và tên <span class="required">*</span></label>
                                            <input id="txtTeacherName" 
                                            v-model="newTeacher.FullName" 
                                            v-bind:class="{'input--error':errors.FullName}" 
                                            @blur="validate()" 
                                            field-label="Họ và tên" 
                                            type="text" 
                                            class="input">
                                            <!-- Thêm class input--error nếu errors.FullName có dữ liệu -->
                                            <div class="error-text" v-if="errors.FullName">
                                                {{ errors.FullName }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="m-row">
                                    <div class="m-col w-100">
                                        <div class="input-wrapper">
                                            <label for="" class="input__label">Email</label>
                                            <input type="text" class="input">
                                        </div>
                                    </div>
                                </div>
                                <div class="m-row">
                                    <div class="m-col w-100">
                                        <div class="input-wrapper">
                                            <label for="" class="input__label" style="margin-right: 0;">QL theo môn</label>
                                            <select id="cbxSubject" class="combobox">
                                                <option>Toán</option>
                                                <option>Lý</option>
                                                <option>Hoá</option>
                                                <option>Sinh</option>
                                                <option>Ngữ Văn</option>
                                                <option>Lịch sử</option>
                                            </select>
                                            <!-- <div class="subject combobox">
                                                <div class="subject-select">
                                                    <div class="subject-select__content">
                                                        <span>QL theo môn</span>
                                                    </div>
                                                    <img src="../../assets/Icons/ic_Chevron.png" alt="">
                                                </div>
                                                <div class="subject-list">
                                                    <div class="subject-list__item subject-list__item-header">
                                                        <img src="../../assets/Icons/ic_Checkbox_Inactive.png" alt="">
                                                        <span>Tất cả</span>
                                                    </div>
                                                    <div class="through">

                                                    </div>
                                                    <div class="subject-list__item">
                                                        <img src="../../assets/Icons/ic_Checkbox_Inactive.png" alt="">
                                                        <span>Toán</span>
                                                    </div>
                                                    <div class="subject-list__item">
                                                        <img src="../../assets/Icons/ic_Checkbox_Inactive.png" alt="">
                                                        <span>Lý</span>
                                                    </div>
                                                    <div class="subject-list__item">
                                                        <img src="../../assets/Icons/ic_Checkbox_Inactive.png" alt="">
                                                        <span>Hoá</span>
                                                    </div>
                                                    <div class="subject-list__item">
                                                        <img src="../../assets/Icons/ic_Checkbox_Inactive.png" alt="">
                                                        <span>Sinh</span>
                                                    </div>
                                                    <div class="subject-list__item">
                                                        <img src="../../assets/Icons/ic_Checkbox_Inactive.png" alt="">
                                                        <span>Ngữ Văn</span>
                                                    </div>
                                                    <div class="subject-list__item">
                                                        <img src="../../assets/Icons/ic_Checkbox_Inactive.png" alt="">
                                                        <span>Lịch sử</span>
                                                    </div>
                                                </div>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="m-row">
                                <div class="m-col w-100">
                                    <div class="input-wrapper" >
                                        <label for="" class="input__label" style="margin-right: 17px;">QL kho , phòng</label>
                                        <select id="cbxSubjectRoom" class="combobox flex-1" 
                                        v-model="newTeacher.DepartmentId"
                                        v-bind:class="{'input--error':errors.DepartmentId}" 
                                        @blur="validate()" >
                                            <option value="">---Chọn phòng---</option>
                                            <option value="3f8e6896-4c7d-15f5-a018-75d8bd200d7c">Phòng Toán-Lý</option>
                                            <option value="45ac3d26-18f2-18a9-3031-644313fbb055">Phòng Hoá Sinh</option>
                                            <option value="78aafe4a-67a7-2076-3bf3-eb0223d0a4f7">Kho phòng chung</option>
                                        </select>
                                        <div class="error-text" v-if="errors.DepartmentId">
                                            {{ errors.DepartmentId }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-detail__footer">
                        <div class="form-row" style="margin-bottom: 30px;">
                            <div class="m-row">
                                <div class="m-col">
                                    <div class="input-wrapper">
                                        <div class="checkbox-item">
                                            <input type="checkbox" id="level">
                                            <label for="level">Trình độ nghiệp vụ QLTB</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="m-col">
                                    <div class="input-wrapper">
                                        <div class="checkbox-item">
                                            <input type="checkbox" id="working">
                                            <label for="working">Đang làm việc</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-detail-buttons">
                            <button id="btn-save" class="btn btn--default" @click="btnSaveOnClick">Lưu</button>
                            <button id="btn-close-form-detail" class="btn" @click="onCloseDetail">Đóng</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    // import axios from 'axios';
    export default{
        name:"EmployeeDetail",
        props:["teacherId"],
        data(){
            return{
                errors:{
                   EmployeeCode:'',
                   FullName:'',
                   DepartmentId:'',
                },
                newTeacher:{
                   EmployeeCode:'',
                   FullName:'',
                   DepartmentId:'',
                }
            }
        },
        created(){
            let teacherId = this.teacherId;
            if(teacherId){
                this.getTeacherId(teacherId);
            }
        },
        methods:{
            /**
             * Validate dữ liệu
             * author : Hưng
             */
            validate(){
                let isValid = true;
                //Set lại giá trị khi đã validate hoặc đã fill data
                this.errors = {
                    EmployeeCode:'',
                    FullName:'',
                    DepartmentId:'',
                }
                if(!this.newTeacher.EmployeeCode){
                    this.errors.EmployeeCode = "Số hiệu cán bộ không được để trống";
                    isValid = false
                }
                if(!this.newTeacher.FullName){
                    this.errors.FullName = "Họ tên cán bộ không được để trống";
                    isValid = false
                }
                if(!this.newTeacher.DepartmentId){
                    this.errors.DepartmentId = "Phòng cán bộ không được để trống"
                    isValid = false
                }
                return isValid;
            },
            //Kiểm tra số
            // isNumber(value){
            //     return /^\d*$/.test(value)
            // },
            
            /**
             * Lưu dữ liệu và Thêm mới
             * author : NTHUNG
             */
            btnSaveOnClick(){
                try{
                    //Validate data
                    if(this.validate()){
                        if(this.newTeacher.EmployeeId){
                            axios.put(`https://cukcuk.manhnv.net/api/v1/Employees/${this.newTeacher.EmployeeId}`,this.newTeacher)
                                .then((res) => {
                                    console.log(res.data);
                                    alert("Thành công");
                                })
                                .catch((error)=>{
                                    console.log(error);
                                })
                        }
                        else{
                            axios.post("https://cukcuk.manhnv.net/api/v1/Employees",this.newTeacher)
                                .then((res) => {
                                    console.log(res.data);
                                    alert("Thành công");
                                })
                                .catch((error)=>{
                                    console.log(error);
                                })
                            return;
                        }
                    }
                }
                catch(e){
                    console.log(e);
                }
            },

            /**
             * Đóng form Thêm mới
             */

            onCloseDetail(){
                try{
                    this.$emit("onClose");
                }
                catch(e){
                    console.log(e);
                }
            },

            /**
             * Lấy id của giáo viên cần sửa
             * 
             */
            getTeacherId(teacherId){
                axios.get(`https://cukcuk.manhnv.net/api/v1/Employees/${teacherId}`)
                    .then((res) => {
                        this.newTeacher = res.data
                        // console.log("New teacher : ",this.newTeacher);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
        }
    }
</script>

<style scoped> 
    @import url(../../assets/css/base/popup.css);
</style>