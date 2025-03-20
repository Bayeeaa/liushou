<template>
    <el-container>
        <el-header style="padding: 0;"><Header></Header></el-header>
        <el-main  class="main_pattern">
            <h1>公益善行</h1>
            <el-divider />
            <RouterView />
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import Header from '@/components/Header.vue';
</script>

<style>
.main_pattern{
  /* 侧边距离 */
  padding: 20px 150px;
}


</style>