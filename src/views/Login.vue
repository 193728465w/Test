<template>
    <!-- <el-card class=""> -->
        <el-form label-width="70px" :rules="rules" ref="formInline" :inline="true" :model="formInline" class="login-container">
            <h3 class="login_title">系统登陆</h3>
            <el-form-item prop="username" label="用户名">
                <el-input v-model="formInline.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密码">
                <el-input type="password" v-model="formInline.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button style="margin-left:105px;margin-top: 10px;" type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    <!-- </el-card> -->
</template>

<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import { getMenu } from '../api'
export default {
    data() {
        return {
            formInline: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
                password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
            }
        }
    },
    methods: {
        onSubmit() {
            //token 密钥
            //const token = Mock.Random.guid()
            //将token信息 存入 cookie 中 用于不同界面的通信
            //Cookie.set('token',token)
            //校验form 
            this.$refs.formInline.validate((valid) => {
                if(valid){
                    getMenu(this.formInline).then(({data}) =>{
                        console.log(data)
                        if(data.code == 2000){
                            
                            Cookie.set('token',data.data.token)
                            //获取菜单的数据局存入store 中
                            this.$store.commit('setMenu' , data.data.menu)
                            this.$store.commit('addMenu' , this.$router)
                            this.$router.push('/home')
                        }else{
                            this.$message.error(data.data.message);
                        }
                    })
                }
            })

        }
    }
}
</script>

<style lang="less" scoped>
.login-container{
    width:350px;
    border:1px solid #eaeaea;
    margin:180px auto;
    padding:35px 35px 15px 35px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;
    .el-form-item{
        margin-right: 0;
        .button{
            margin: center;
        }
    }
    .login_title{
        text-align: center;
        margin-bottom: 40px;
        color:#505458;
    }
    .el-input{
        width:198px;
    }
}
</style>