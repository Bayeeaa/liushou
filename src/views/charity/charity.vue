<template>
    <el-container>
        <el-header style="padding: 0;"><Header></Header></el-header>
        <el-main  class="main_pattern">
            <div style="font-size:30px">个人天地</div>
            <el-divider />
            <RouterView />
            <br><br>
            <el-row class="row-bg" justify="space-evenly">
                <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
                <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
                <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
            </el-row>

            
        </el-main>
        <el-main class="main_pattern">
            <el-row :gutter="20" justify="space-between">
                <el-col :span="12">
                    <div class="chat-container">
                        <el-input v-model="userInput" placeholder="输入消息..." @keyup.enter="sendMessage" />
                        <el-button type="primary" @click="sendMessage">发送</el-button>
                        <div v-for="(msg, index) in messages" :key="index">
                            <div v-if="msg.role === 'user'" style="text-align: right;">用户: {{ msg.content }}</div>
                            <div v-if="msg.role === 'ai'" style="text-align: left;">AI: {{ msg.content }}</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="10" ><el-calendar v-model="value" /></el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute  } from 'vue-router'
import Header from '@/components/Header.vue';
import axios from 'axios';

const route = useRoute()
// 定义变量
const value = ref(new Date());
// const userInput = ref('');
// const messages = ref([
//   { role: 'ai', content: '你好！有什么我可以帮忙的吗？' },
// ]);

// const corsProxy = 'https://cors-anywhere.herokuapp.com/';
// const apiKey = '';  // 使用你的 API 密钥
// const baseURL = 'https://api.deepseek.com/'; // DeepSeek API URL

// // 发送消息
// const sendMessage = async () => {
//   if (!userInput.value.trim()) return;

//   // 添加用户消息到消息列表
//   messages.value.push({ role: 'user', content: userInput.value });

//   try {
//     // 调用 DeepSeek API 获取 AI 回复
//     const aiResponse = await deepSeekAPI(userInput.value);

//     // 添加 AI 消息到消息列表
//     messages.value.push({ role: 'ai', content: aiResponse });

//   } catch (error) {
//     console.error('请求 DeepSeek API 失败:', error);
//     messages.value.push({ role: 'ai', content: '发生错误，请稍后再试！' });
//   }

//   // 清空用户输入框
//   userInput.value = '';
// };

// // 调用 DeepSeek API 获取响应
// const deepSeekAPI = async (userInput: string) => {
//   // 构建请求体
//   const data = JSON.stringify({
//     "messages": [
//       { "content": "You are a helpful assistant", "role": "system" },
//       { "content": userInput, "role": "user" }
//     ],
//     "model": "deepseek-chat",
//     "max_tokens": 100,
//     "temperature": 1,
//     "top_p": 1,
//     "frequency_penalty": 0,
//     "presence_penalty": 0,
//     "response_format": { "type": "text" },
//     "stream": false,
//     "stop": null
//   });

//   // 配置请求
//   const config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: '/api',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//       'Authorization': `Bearer ${apiKey}`,
//     },
//     data: data,
//   };

//   // 发送请求并获取结果
//   const response = await axios(config);
//   return response.data.choices[0].message.content;  // 假设返回的 AI 回复在 `choices[0].message.content`
// };

</script>

<style>
.main_pattern{
  /* 侧边距离 */
  padding: 20px 150px;
}
.grid-content {
  border-radius: 4px;
  min-height: 350px;
  background-color: rgb(214, 252, 250);
}

.chat-container {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f9f9f9;
}

.chat-messages {
  max-height: 200px;
  overflow-y: auto;
  padding: 5px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 5px;
}

.user-message {
  text-align: right;
  background: #007bff;
  color: white;
  padding: 5px;
  margin: 5px;
  border-radius: 8px;
}

.ai-message {
  text-align: left;
  background: #ddd;
  color: black;
  padding: 5px;
  margin: 5px;
  border-radius: 8px;
}
</style>