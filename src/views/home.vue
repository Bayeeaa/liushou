<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Block from '@/components/Block.vue'
const images = ref([
  '../src/assets/home_pic/image1.png',
  '../src/assets/home_pic/image2.png'
]);
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
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
              <div class="content">项目概述内容...</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">成功案例</div>
                <el-button type="danger" @click="navigateTo('/success-cases')">更多</el-button>
              </div>
              <div class="content">成功案例内容...</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">关于我们</div>
                <el-button type="danger" @click="navigateTo('/about-us')">更多</el-button>
              </div>
              <div class="content">关于我们内容...</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">工艺模块</div>
                <el-button type="danger" @click="navigateTo('/process-module')">更多</el-button>
              </div>
              <div class="content">工艺模块内容...</div>
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
              <div class="content">爱心捐赠内容...</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">信息公开</div>
                <el-button type="danger" @click="navigateTo('/information-disclosure')">更多</el-button>
              </div>
              <div class="content">信息公开内容...</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">党建专栏</div>
                <el-button type="danger" @click="navigateTo('/party-column')">更多</el-button>
              </div>
              <div class="content">党建专栏内容...</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple">
              <div class="theme-container">
                <div class="theme">加入我们</div>
                <el-button type="danger" @click="navigateTo('/join-us')">更多</el-button>
              </div>
              <div class="content">加入我们内容...</div>
            </div>
          </el-col>
        </el-row>     
    </el-main> 
    <el-main class="main_pattern">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content ep-bg-purple">
            <div class="theme-container">
              <div class="theme">视频</div>
              <el-button type="danger" @click="navigateTo('/videos')">更多</el-button>
            </div>
            <div class="content">视频内容...</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple-light">
            <div class="theme-container">
              <div class="theme">图片</div>
              <el-button type="danger" @click="navigateTo('/images')">更多</el-button>
            </div>
            <div class="content">图片内容...</div>
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
  margin-bottom: 20px;
}

.el-button {
  position: relative;
}
</style>