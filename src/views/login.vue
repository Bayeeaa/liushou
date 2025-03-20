<template>
    <el-container>
    <el-header style="padding: 0;"><Header></Header></el-header>
    <el-main  class="table_pattern">
        <div style="font-size:30px">用户注册</div>
            <el-divider />
        <Login_table></Login_table>
    </el-main>
    </el-container>

</template>

<script lang="ts" setup>
import Login_table from '@/components/Login_table.vue';
import Header from '@/components/Header.vue';
</script>

<style>
.table_pattern{
    padding: 20px 200px;
}
</style>