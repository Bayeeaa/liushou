<template>
    <el-container>
        <el-header style="padding: 0;"><Header></Header></el-header>
        <el-main  class="main_pattern">
            <el-card class="box-card">
                <div style="font-size:30px">爱心捐赠</div>
                <el-divider />
                <RouterView />
            </el-card>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import Header from '@/components/Header.vue';
</script>

<style>


</style>