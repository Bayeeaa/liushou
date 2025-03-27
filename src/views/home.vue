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

import { ref, reactive } from 'vue';

import { project } from "@/stores/pages";
const pj = project();
const project_overview = ref(pj.project_overview);
const demo = ref(pj.demo);
//聚焦数据
const focusData = ref([
  { title: '人民领袖｜总书记谈到的“苹果故事”意味深长', link: 'https://news.cctv.com/2025/03/25/ARTIE9OmtihDrn3XeQaxdhuV250321.shtml?spm=C94212.PX2vlYqXvXQY.S57313.2' },
  { title: '奋进的春天｜让人民群众有更多获得感', link: 'https://news.cctv.com/2025/02/27/ARTIetkjLzgL4JP1uYTKwF9T250225.shtml?spm=C94212.PX2vlYqXvXQY.S57313.12' },
  { title: '团圆年｜岁末问暖 共祝美好', link: 'https://news.cctv.com/2025/02/02/ARTIYRRXI6SuOM3BKbWYb4KV250123.shtml?spm=C94212.PX2vlYqXvXQY.S57313.20' },
  { title: '12356热线为青少年心理健康提供专业支持', link: 'https://edu.cctv.com/2025/01/07/ARTIuwA3FmvnXOxyh6QGn4af250107.shtml' },
  { title: '你好，代表｜胡春莲：守护青少年心理健康，完善医教协同服务体系', link: 'https://people.cctv.com/2025/03/10/ARTIWQKZlK8WUNNc74YyXKZm250310.shtml' },
  { title: '线上线下结合，专家共同研讨青少年心理健康问题', link: 'https://edu.cctv.com/2024/10/31/ARTI1uiZRXS9C8WKIP6dBXft241031.shtml' },
]);

// 图书数据
const books = reactive([
  {
    title: "小海蒂",
    author: "约翰娜·施皮里",
    image: "/src/assets/books/book1.jpg",
    description: "一个关于爱和成长的温暖故事。",
    link: "https://book.douban.com/subject/1023712/"
  },
  {
    title: "我不焦虑",
    author: "安娜·巴恩斯",
    image: "/src/assets/books/book2.jpg",
    description: "帮助孩子克服焦虑的指南。",
    link: "https://book.douban.com/subject/35857847/"
  },
  {
    title: "我很愤怒",
    author: "迈克尔·伊恩·布莱克",
    image: "/src/assets/books/book3.jpg",
    description: "引导孩子理解和管理愤怒情绪。",
    link: "https://book.douban.com/subject/35100421/"
  },
  {
    title: "驭风少年",
    author: "威廉·卡明奎巴",
    image: "/src/assets/books/book4.jpg",
    description: "一个自闭症少年的励志故事。",
    link: "https://book.douban.com/subject/34442005/"
  },
  {
    title: "不爱说话的十一岁",
    author: "露西·弗兰克",
    image: "/src/assets/books/book5.jpg",
    description: "讲述一个沉默少年的成长故事。",
    link: "https://book.douban.com/subject/35003713/"
  },
  {
    title: "我和我的情绪",
    author: "伊丽莎白·科尔",
    image: "/src/assets/books/book6.jpg",
    description: "帮助孩子理解和管理自己的情绪。",
    link: "https://book.douban.com/subject/36536557/"
  },
  {
    title: "追光的孩子",
    author: "唐·库苏",
    image: "/src/assets/books/book7.jpg",
    description: "一个关于梦想与坚持的动人故事。",
    link: "https://book.douban.com/subject/36442292/"
  }
]);


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
          <el-card class="box-card focus-section" shadow="hover">
            <template #header>
              <div class="card-header">
                <span class="theme">
                  <i class="el-icon-view" style="margin-right: 6px;"> </i>聚焦</span>
                <el-button type="danger">
                  <a href="https://news.cctv.com/" target="_blank" rel="noopener noreferrer" style="color: #fff; text-decoration: none;">更多</a>
                </el-button>
              </div>
            </template>
            <div v-for="(item, index) in focusData" :key="index" class="text item">
              <a :href="item.link" target="_blank" rel="noopener noreferrer">
                {{ item.title }}
              </a>
            </div>

          </el-card>
        </el-col>
      </el-row>
    </el-main> 

    <el-main class="main_pattern">
      <section class="autism-books">
        <h2>自闭症相关书籍</h2>
        <el-row :gutter="20">
          <el-col
            v-for="book in books"
            :key="book.title"
            :span="12"
          >
            <el-card class="book-card" shadow="hover">
              <div class="book-card-flex">
                <div class="book-info">
                <h3>{{ book.title }}</h3>
                <p><strong>作者:</strong> {{ book.author }}</p>
                <p>{{ book.description }}</p>
                <el-button
                  type="primary"
                  size="mini">
                <a :href="book.link" target="_blank" style="color: #fff;">
                  在线阅读
                </a>
                </el-button>
              </div>

              <div class="book-cover-container">
                <img :src="book.image" :alt="book.title" class="book-cover" />
              </div>
            </div>
            </el-card>
          </el-col>
        </el-row>
      </section>
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
/*新闻聚焦样式*/
.focus-section {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
}
.focus-section .text.item {
  margin: 8px 0;           /* 每条之间留点距离 */
  font-size: 17px;         /* 字号适中 */
}

/* 链接默认颜色和鼠标悬停效果 */
.focus-section .text.item a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}
.focus-section .text.item a:hover {
  color: #81878d; /* Element-Plus主色调 */
}


/* 自闭症相关书籍板块样式：减小了内边距以减少留白 */
.autism-books {
  padding: 20px 20px; /* 原先是40px 20px，可再视需要调整 */
  background: #f0f2f5;
  text-align: center;
}

.autism-books h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #263d4d;
}

/* 每本书的卡片：去掉 min-height，减少多余留白 */
.book-card {
  margin-bottom: 16px; /* 原先是20px，可再自行调小或保留 */
}

/* 大容器采用Flex布局：左边文字，右边图片 */
.book-card-flex {
  display: flex;          /* 启用 Flex */
  flex-direction: row;    /* 横向排列 */
  align-items: flex-start;/* 左右顶对齐 */
  gap: 20px;              /* 左右内容的间距 */
}

/* 左侧文字区域 */
.book-info {
  flex: 1;                /* 占据剩余空间 */
  text-align: left;
}

/* 右侧图片容器：固定宽度，保证排版整齐 */
.book-cover-container {
  width: 180px;   /* 原先是200px，可根据实际需要调整 */
  border-radius: 5px;
  overflow: hidden;
}

/* 图片自适应容器大小 */
.book-cover {
  width: 100%;
  height: auto; 
  object-fit: contain; /* 若想让图片完全铺满可改 cover */
  border-radius: 5px;
}

/* 书名等文字排版 */
.book-info h3 {
  margin: 0 0 5px 0;
  font-size: 18px;
  color: #333;
}

/* 如果不需要特殊样式，可删除这个描述类或在 p 标签上加 class="description" */
.description {
  color: #666;
  line-height: 1.4em;
  margin: 8px 0 12px;
}
</style>
