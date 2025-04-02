<template>
<h1>团队介绍：</h1>
<el-row :gutter="20">
    <el-col v-for="p in pic" :key="p.name" :span="6">
    <el-card style="width: 220px; margin: 15px 30px; text-align: center;" shadow="hover">
        <div>
        <img :src="p.image"  style="height: 200px; width: 150px;"/>
        </div>
        <h3 style="margin-top: 5px;">{{ p.name }}</h3>
    </el-card>
    </el-col>
</el-row>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const pic = reactive([
{ name: "高灵婧（社会工作）", image: "/photo/image7.jpg" },
{ name: "李慧芳（社会工作）", image: "/photo/image6.jpg" },
{ name: "奚子砾（社会工作）", image: "/photo/image4.jpg" },
{ name: "周一帆（社会工作）", image: "/photo/image5.jpg" },
{ name: "叶一楠（人工智能）", image: "/photo/image2.jpg" },
{ name: "杨鼎（人工智能）", image: "/photo/image3.jpg" },
{ name: "周颖（社会工作）", image: "/photo/image1.jpg" },
]);
</script>

<style>
</style>
