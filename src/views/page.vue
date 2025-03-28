<template>
    <el-container>
        <el-header style="padding: 0;"><Header></Header></el-header>
        <el-main  class="main_pattern">
            <el-card class="box-card">
                <div style="font-size:30px">{{ title }}</div>
                <el-divider />
                <div>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a :href="breadcrumbLink">{{ breadcrumbText }}</a></el-breadcrumb-item>
                    </el-breadcrumb>
                    <div v-if="content">
                        <p>{{ content }}</p>
                    </div>
                    <div v-else>
                        <p>正在加载文章...</p>
                    </div>
                </div>                
            </el-card>
        </el-main>
    </el-container>

</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Header from '@/components/Header.vue';

// 定义响应式数据
const title = ref('')
const content = ref('')
const breadcrumbText = ref('')
const breadcrumbLink = ref('')

// 获取路由参数
const route = useRoute()
const { path, params } = route
const pageId = params.pageId

// 获取不同内容的文章
const fetchArticle = async () => {
    const prefix = path.split('/')[1] // 获取路径的第一个部分（news 或 project-overview）
    console.log(prefix,pageId);
    
    try {
        // 根据路径前缀构建 API 请求
        const response = await axios.get(`/api/${prefix}/${pageId}`)  // 动态拼接路径
        title.value = response.data.title
        content.value = response.data.content
    } catch (error) {
        console.error('获取文章失败:', error)
    }
}

// 设置面包屑链接和文字
const setBreadcrumb = () => {
    if (path.startsWith('/project-overview')) {
        breadcrumbText.value = '项目概览'
        breadcrumbLink.value = '/project-overview'
    } else if (path.startsWith('/news')) {
        breadcrumbText.value = '新闻'
        breadcrumbLink.value = '/news'
    }
}

onMounted(() => {
    setBreadcrumb()
    fetchArticle()
})
</script>


<style scoped>
/* 这里可以添加一些样式 */
</style>
