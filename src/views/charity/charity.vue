<template>
    <el-container>
        <el-header style="padding: 0;"><Header></Header></el-header>
        <el-main  class="main_pattern">
            <div style="font-size:30px">公益模块</div>
            <el-divider />
            <RouterView />
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { useRoute  } from 'vue-router'
import Header from '@/components/Header.vue';

const route = useRoute()
const currentPath = route.path
console.log(currentPath.substring(9));

</script>

<style>
.main_pattern{
  /* 侧边距离 */
  padding: 20px 150px;
}


</style>