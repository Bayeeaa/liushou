<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="姓名">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="人员">
      <el-select v-model="form.identity" placeholder="请选择您属于的人员">
        <el-option label="流动/留守儿童" value="children" />
        <el-option label="家长" value="parent" />
        <el-option label="社工站和公益机构" value="ngo" />
      </el-select>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.sex">
        <el-radio label="男" />
        <el-radio label="女" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="输入密码" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确认</el-button>
      <el-button @click="onCancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import router from '@/router';
import { reactive,ref } from 'vue'
import axios from 'axios';

const ruleForm = reactive({
  pass: '',
  checkPass: '',
})

// do not use same name with ref
const form = reactive({
  name: '',
  identity: '',
  sex: '',
})

const onSubmit = async () => {
    const data = {
        name: form.name,
        identity: form.identity,
        sex: form.sex,
        password: ruleForm.pass,
    };    
    const pass_check = {
        pass: ruleForm.pass,
        pass2: ruleForm.checkPass,
    }
    if(ruleForm.checkPass === ruleForm.pass){
        try {
            const response = await axios.post('http://localhost:8000/api/register/', data);
            console.log('注册成功:', response.data);
            // 跳转到登录页面或者其他页面
            router.push('/login');
        } catch (error) {
            console.error('注册失败:', error);
        }
    }else{
        console.log("密码不一致");
    }




};

const onCancel = () => {
    router.push('/home')
}
</script>

<style>


</style>