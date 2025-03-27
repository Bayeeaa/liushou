<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Block from '@/components/Block.vue'
import Footer from '@/components/Footer.vue'
import '@/views/home.css'; //外部导入css
const images = ref([
  '../src/assets/home_pic/image1.jpg',
  '../src/assets/home_pic/image2.jpg',
  '../src/assets/home_pic/image3.jpg'
]);
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};

const carouselItems = ref([
  '../src/assets/activity/act1.jpg',
  '../src/assets/activity/act2.jpg',
  '../src/assets/activity/act3.jpg',
  '../src/assets/activity/act4.jpg',
  '../src/assets/activity/act5.jpg',
  '../src/assets/activity/act6.jpg',
]);

const video = ref([
  '../src/assets/video/video1.mp4'
])

const word = ref([
  "习近平：少年儿童是我们伟大祖国的希望、我们伟大民族的希望。",
  "少年儿童是祖国的未来。 —— 习近平",
  "习近平：少年强则国强，少年进步则国进步。",

])

import { project } from "@/stores/pages";
const pj = project()
const project_overview = ref(pj.project_overview);
const demo = ref(pj.demo)
</script>

<template>
  <el-container>
    <el-header style="padding: 0;"><Header></Header></el-header>
    <el-main class="main_pattern">
        <div class="block text-center">
            <el-carousel height="500px">
              <el-carousel-item v-for="(image, index) in images" :key="index">
                <img :src="image" alt="Carousel Image"/>
              </el-carousel-item>
            </el-carousel>
        </div>

        <div class="block text-center">
          <br>
          <el-carousel height="150px">
            <el-carousel-item v-for="item in word" :key="item">
              <div style="font-size: 40px;">{{ item }}</div>
            </el-carousel-item>
          </el-carousel>
        </div>
    </el-main>   
    <el-main class="main_pattern"> 
      <div style="font-size: 20px; color:rgb(38, 148, 244); ">帮助人次：317</div>
      <el-row :gutter="20">
        
      </el-row>
    </el-main>
    <el-main class="main_pattern">
      <el-row :gutter="20">
        <Block title="项目概述" morePath="/project-overview" :Span="8" :items="project_overview"></Block>
        <Block title="最新动态" morePath="/news" :Span="8" :items="demo"></Block>
        <Block title="公益模块" morePath="/process-module" :Span="8" :items="demo"></Block>
      </el-row> 

      <el-row :gutter="20">
        <Block title="书籍推荐" morePath="/process-module" :Span="8" :items="demo"></Block>
        <Block title="视频推荐" morePath="/process-module" :Span="8" :items="demo"></Block>
        <Block title="信息公开" morePath="/process-module" :Span="8" :items="demo"></Block>
      </el-row>   
      
      <el-row>
        <el-col :span="12" :offset="6">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span class="theme">聚焦</span>
                <el-button type="danger" @click="navigateTo('/success-cases')">更多</el-button>
              </div>
            </template>
            <div v-for="o in 6" :key="o" class="text item">{{ 'List item ' + o }}</div>
          </el-card>
        </el-col>
      </el-row>
    </el-main> 
    
    <el-main class="main_pattern">
      <span class="theme" style="font-size: 30px;">活动掠影</span>
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="(image, index) in carouselItems" :key="index">
          <img :src="image" alt="Carousel Image"/>
        </el-carousel-item>
      </el-carousel>    

      <span class="theme" style="font-size: 30px;">视频展示</span>
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="(videoSrc, index) in video" :key="index">
          <video 
            :src="videoSrc" 
            controls 
            autoplay 
            loop
            muted
            class="video-player"
          />
        </el-carousel-item>
      </el-carousel>
    </el-main>

    <el-divider />
    <el-footer>
      <Footer></Footer>
    </el-footer>
          
    
  </el-container>

  <el-backtop :right="100" :bottom="100" />

</template>

<style scoped>
</style>