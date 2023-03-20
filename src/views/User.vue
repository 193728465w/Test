<template>
    <div class="manage">
        <el-dialog title="新增" :visible.sync="dialogVisible" :before-close="handleClose" width="50%">
            <el-form ref="form" :rules="rules" inline :model="form" label-width="100px" label-position="right">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name" placeholder="请输入姓名">
                    </el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="form.age" placeholder="请输入年龄" />
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-select v-model="form.sex" placeholder="请选择性别">
                        <el-option label="男" :value="1"></el-option>
                        <el-option label="女" :value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生日期" prop="birth">
                    <el-date-picker v-model="form.birth" value-format="YYYY-MM-DD" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="地址" prop="addr">
                    <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="handleAdd">新增</el-button>
            <el-form :inline="true" :model="userForm" class="demo-form-inline">
                <el-form-item label="姓名">
                    <el-input v-model="userForm.name" placeholder="请输入查询姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="common-tabel">
            <el-table :data="tableData" stripe style="width: 100%" height="90%">
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="180">
                    <template slot-scope="scope">
                        <span style="margin-left:10px">{{ scope.row.sex == 1 ? '男' : '女' }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="age" label="年龄">
                </el-table-column>
                <el-table-column prop="birth" label="出生日期">
                </el-table-column>
                <el-table-column prop="addr" label="地址">
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            
        </div>
        <div class="pager">
                <el-pagination layout="prev, pager, next" :total="total" @current-change="handleChange">
                </el-pagination>
            </div>

    </div>
</template>
  <!-- 
      {
                    model:'name',
                    label: '姓名',
                    type:'input'
                },
                {
                    model:'age',
                    label: '年龄',
                    type:'input'
                },
                {
                    model:'sex',
                    label: '性别',
                    type:'input'
                },
                {
                    model:'birth',
                    label: '出生日期',
                    type:'input'
                },
                {
                    model:'addr',
                    label: '地址',
                    type:'input'
                },
                {
                    model:'name',
                    label: '姓名',
                    type:'input'
                },
   -->
<script>
import { getUser, addUser, editUser, delUser } from '../api'
export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                age: '',
                sex: '',
                birth: '',
                addr: ''
            },
            rules: {
                name: { required: true, message: "请输入姓名", trigger: 'blur' },
                age: { required: true, message: "请输入年龄", trigger: 'blur' },
                sex: { required: true, message: "请选择性别", trigger: 'blur' },
                birth: { required: true, message: "请选择出生日期", trigger: 'blur' },
                addr: { required: true, message: "请输入住址", trigger: 'blur' },
            },
            tableData: [],
            modalType: 0,//0 新增 1编辑
            total: 0,
            pageData: {
                page: 1,
                limit: 10
            },
            userForm:{
                name:''
            }
        }
    },
    methods: {
        submit() {
            this.$refs.form.validate((valid) => {
                console.log(valid)
                if (valid)
                    if (this.modalType === 0) {
                        addUser(this.form).then(() => {
                            this.getList()
                        })
                    }
                    else {
                        editUser(this.form).then(() => {
                            this.getList()
                        })
                    }
                this.$refs.form.resetFields()
                this.dialogVisible = false
            })
        },
        handleClose() {
            this.$refs.form.resetFields()
            this.dialogVisible = false
        },
        cancel() {
            this.handleClose()
        },
        handleEdit(row) {
            this.dialogVisible = true
            this.modalType = 1
            //需要对数据进行深拷贝
            this.form = JSON.parse(JSON.stringify(row))
            console.log(row)
        },
        handleDelete(row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                delUser({ id: row.id }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.getList()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        getList() {
            getUser({ params: {...this.userForm ,...this.pageData} }).then(({ data }) => {
                this.tableData = data.List
                console.log('1231322', data.count)
                this.total = data.count || 0
            })
        },
        handleAdd() {
            this.dialogVisible = true
            this.modalType = 0
        },
        handleChange(val) {
            console.log('val', val)
            this.pageData.page = val
            this.getList()
        },
        onSubmit() {
            this.getList()
        }
    },
    mounted() {
        this.getList()
    }
}
</script>
  
<style lang="less" scoped>
.manage {
    height: 90%;
    .manage-header{
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .common-tabel {
        position: relative;
        height: calc(100% - 62px);
        
    }
    .pager {
        position: absolute;
        bottom: 20 0px;
        right: 20px
    }
}
</style>>