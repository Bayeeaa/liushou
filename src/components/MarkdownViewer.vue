<template>
    <div v-html="renderedMarkdown"></div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import marked from 'marked';
  
  // 用于存储 Markdown 文件内容的响应式变量
  const renderedMarkdown = ref('');
  
  // 在组件加载时获取 Markdown 文件内容
  onMounted(async () => {
    try {
      // 使用 axios 请求获取 Markdown 文件内容
      const response = await axios.get('/project-overview/page/page1.md');
      // 使用 marked.js 将 Markdown 转换为 HTML
      renderedMarkdown.value = marked.parse(response.data) as string;
    } catch (error) {
      console.error('Error loading Markdown file:', error);
    }
  });
  </script>
  
  <style scoped>
  /* 你可以在这里添加样式来美化 Markdown 内容 */
  </style>
  