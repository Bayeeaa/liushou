<script setup lang="ts">
import Header from '@/components/Header.vue';
import Block from '@/components/Block.vue'
</script>

<template>
  <el-container>
    <el-header style="padding: 0;"><Header></Header></el-header>
    <el-main class="main_pattern">
        <div class="block text-center">
            <el-carousel height="500px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small justify-center" text="2xl">{{ item }}</h3>
            </el-carousel-item>
            </el-carousel>
        </div>
    </el-main>   
    <el-main class="main_pattern">
        <el-row :gutter="20">
          <el-col :span="6"><Block></Block></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row> 
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content ep-bg-purple" >123q</div></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
          <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
        </el-row>     
    </el-main> 
    <el-main class="main_pattern">
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple-light" /></el-col>
      </el-row>
    </el-main>

    <el-footer>

    </el-footer>
          
    
  </el-container>

  <el-backtop :right="100" :bottom="100" />

</template>

<style scoped>
.main_pattern{
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
}
</style>