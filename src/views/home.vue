<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Block from '@/components/Block.vue'
import Footer from '@/components/Footer.vue'
import '@/views/home.css'; //外部导入css
const images = ref([
  '../src/assets/home_pic/image1.png',
  '../src/assets/home_pic/image2.png'
]);
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};

const carouselItems = ref([ //轮播图跳转
  { image: '/src/assets/home_pic/image1.png', path: '/page1' },
  { image: '/src/assets/home_pic/image2.png', path: '/page2' },
  { image: '/src/assets/home_pic/image3.png', path: '/page3' },
  { image: '/src/assets/home_pic/image4.png', path: '/page4' },
  { image: '/src/assets/home_pic/image5.png', path: '/page5' },
  { image: '/src/assets/home_pic/image6.png', path: '/page6' }
]);

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
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small justify-center" text="2xl">{{ item }}</h3>
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
        <el-carousel-item 
          v-for="(item, index) in carouselItems" 
          :key="index" 
          @click="navigateTo(item.path)"
          style="cursor: pointer;"
        >
          <img :src="item.image" alt="carousel image" style="width: 100%; height: 100%; object-fit: cover;" />
        </el-carousel-item>
      </el-carousel>    

      <span class="theme" style="font-size: 30px;">视频展示</span>
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
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