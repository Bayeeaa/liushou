<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Block from '@/components/Block.vue'
const images = ref([
  '../src/assets/home_pic/image1.png',
  '../src/assets/home_pic/image2.png'
]);
import { useRouter } from 'vue-router';
const contentItems = [
  { title: '想问 为什么' },
  { title: '我不再是你的快乐' },
  { title: '可是为什么' },
  { title: '却苦笑说我都懂了' },
  { title: '叶一楠南' },
  { title: '自尊常常拖着' },
  { title: '把爱都走曲折' },
  { title: '叶一楠南' },
  { title: '小狗苏苏苏1' },
  { title: '叶一楠南' },
  // 更多内容...
];
const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};

const showVideoContent = ref(false); // 初始化为 false
const showImageContent = ref(false); // 初始化为 false

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
    </el-main>   
    <el-main class="main_pattern">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">项目概述</div>
                <el-button type="danger" @click="navigateTo('/project-overview')">更多</el-button>
              </div>
              <div class="content">
                <ul class="content-list">
                  <li v-for="(item, index) in contentItems" :key="index">
                    {{ item.title }} 
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">成功案例</div>
                <el-button type="danger" @click="navigateTo('/success-cases')">更多</el-button>
              </div>
              <div class="content">
                <ul class="content-list">
                  <li v-for="(item, index) in contentItems" :key="index">
                    {{ item.title }} 
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">关于我们</div>
                <el-button type="danger" @click="navigateTo('/about-us')">更多</el-button>
              </div>
              <div class="content">
                <ul class="content-list">
                  <li v-for="(item, index) in contentItems" :key="index">
                    {{ item.title }} 
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">工艺模块</div>
                <el-button type="danger" @click="navigateTo('/process-module')">更多</el-button>
              </div>
              <div class="content">
                <ul class="content-list">
                  <li v-for="(item, index) in contentItems" :key="index">
                    {{ item.title }} 
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row> 
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">爱心捐赠</div>
                <el-button type="danger" @click="navigateTo('/donation')">更多</el-button>
              </div>
              <div class="content">
                <ul class="content-list">
                  <li v-for="(item, index) in contentItems" :key="index">
                    {{ item.title }} 
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">信息公开</div>
                <el-button type="danger" @click="navigateTo('/information-disclosure')">更多</el-button>
              </div>
              <div class="content">
                <ul class="content-list">
                  <li v-for="(item, index) in contentItems" :key="index">
                    {{ item.title }} 
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">党建专栏</div>
                <el-button type="danger" @click="navigateTo('/party-column')">更多</el-button>
              </div>
              <div class="content">
                <ul class="content-list">
                  <li v-for="(item, index) in contentItems" :key="index">
                    {{ item.title }} 
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">加入我们</div>
                <el-button type="danger" @click="navigateTo('/join-us')">更多</el-button>
              </div>
              <div class="content">
                <ul class="content-list">
                  <li v-for="(item, index) in contentItems" :key="index">
                    {{ item.title }} 
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>     
    </el-main> 
    <el-main class="main_pattern">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content ep-bg-purple">
            <div class="theme-container">
              <div class="theme">聚焦</div>
              <el-button type="danger" @click="navigateTo('/focus')">更多</el-button>
            </div>
            <div class="content">
                <ul class="content-list">
                  <li v-for="(item, index) in contentItems" :key="index">
                    {{ item.title }} 
                  </li>
                </ul>
              </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple-light">
            <div class="theme-container">
              <div class="video-image-title">
              <el-button type="text" @click="showVideoContent = true; showImageContent = false">视频</el-button>
              <div class="divider"></div>
              <el-button type="text" @click="showVideoContent = false; showImageContent = true">图片</el-button>
              <el-button type="danger" @click="navigateTo('/videos-images')">更多</el-button>
            </div>
            </div>

          <!--视频和图片内容-->
            <div class="content">
              <div class="video-image-container">
                <div class="video-item" v-if="showVideoContent">
                  <video
                    src="@/assets/video/sunday.mp4"
                    width="100%"
                    height="auto"
                    controls
                    preload="metadata"
                  >
                  </video>
                </div>
                <div class="image-item" v-if="showImageContent">
                  <img src="@/assets/pig.png" alt="一只叶一楠"/>
                </div>
              </div>
            </div>
          </div>  
        </el-col> 
      </el-row>
    </el-main>

    <el-footer>

    </el-footer>
  </el-container>

  <el-backtop :right="100" :bottom="100" />
</template>

<style scoped>
.main_pattern {
  /* 侧边距离 */
  padding: 20px 150px;
}

.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 350px;
  background-color: rgb(214, 252, 250);
  padding: 20px;
  position: relative;
}

.theme-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.theme {
  font-size: 20px;
  font-weight: bold;
  color: red;
  position: relative;
}

.theme::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: red;
}

.content {
  margin-top: 20px;
}

.el-button {
  position: relative;
}

.video-image-container {
  display: flex;
  justify-content: space-between;
}

.video-item, .image-item {
  width: 100%; /* Adjust as needed */
  position: relative;
}

.video-item img, .image-item img {
  width: 100%;
  height: auto;
}
.video-image-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-button--text {
  color: red;
  font-size: 20px;
  font-weight: bold;
}

.el-button--text:hover {
  text-decoration: underline;
}
.divider {
  width: 1px;
  height: 20px;
  background-color: black;
  margin: 0 10px;
}



</style>