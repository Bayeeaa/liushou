<template>
    <!-- 上半部分：Logo、平台名称、标语、搜索框 -->
    <div class="header-top">
      <!-- 左侧：Logo + 平台名称 -->
      <div class="logo-and-name">
        <img class="logo-img" src="@/assets/logo.png" alt="Logo" />
        <span class="platform-name">童心智联公益平台</span>
      </div>

      <!-- 中间：标语 -->
      <div class="slogan">
        <h1>孤影不孤，心声有应</h1>
      </div>

      <!-- 右侧：搜索框 -->
      <div class="search-box">
        <el-input v-model="searchQuery" placeholder="请输入搜索内容" clearable @keyup.enter="handleSearch">
          <template #append>
            <el-button @click="handleSearch">
              <i class="el-icon-search"></i>
            </el-button>
          </template>
        </el-input>
      </div>
    </div>

    <!-- 下半部分：导航菜单 -->
    <div class="nav-menu-container">
      <el-menu :default-active="activeIndex2" class="nav-menu" mode="horizontal" background-color="#337ecc"
        text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>

        <el-sub-menu index="2">
          <template #title>公益模块</template>
          <el-menu-item index="2-1">流动/留守儿童</el-menu-item>
          <el-menu-item index="2-2">家长</el-menu-item>
          <el-menu-item index="2-3">社工站和公益机构</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>爱心捐赠</template>
          <el-menu-item index="3-1">证书申领</el-menu-item>
          <el-menu-item index="3-2">政府补贴</el-menu-item>
          <el-sub-menu index="3-3">
            <template #title>捐赠方式</template>
            <el-menu-item index="3-3-1">短信捐赠</el-menu-item>
            <el-menu-item index="3-3-2">银行转账</el-menu-item>
            <el-menu-item index="3-3-3">网上捐款</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>信息公开</template>
          <el-menu-item index="4-1">工作报告</el-menu-item>
          <el-menu-item index="4-2">资金用途</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="5">
          <template #title>党建专栏</template>
          <el-menu-item index="5-1">党建报告</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="6">
          <template #title>关于我们</template>
          <el-menu-item index="6-1">平台成员</el-menu-item>
          <el-menu-item index="6-2">平台章程</el-menu-item>
          <el-menu-item index="6-3">管理制度</el-menu-item>
          <el-menu-item index="6-4">平台中心站</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="7">
          <template #title>加入我们</template>
          <el-menu-item index="7-1">普通志愿者</el-menu-item>
          <el-menu-item index="7-2">专业志愿者</el-menu-item>
          <el-menu-item index="7-3">大学生志愿者</el-menu-item>
          <el-menu-item index="7-4">联系我们</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchQuery = ref("");
const activeIndex2 = ref('1');

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: "/search", query: { q: searchQuery.value } });
  }
};

const handleSelect = (key: string) => {
  const routes: Record<string, string> = {
    '1': '/home',
    // 公益模块
    '2-1': '/charity/children',
    '2-2': '/charity/parents',
    '2-3': '/charity/ngo',
    // 爱心捐赠
    '3-1': '/donation/certificate',
    '3-2': '/donation/subsidy',
    '3-3-1': '/donation/methods/one',
    '3-3-2': '/donation/methods/two',
    '3-3-3': '/donation/methods/three',
    // 信息公开
    '4-1': '/info/report',
    '4-2': '/info/finance',
    // 党建专栏
    '5-1': '/party/report',
    // 关于我们
    '6-1': '/about/members',
    '6-2': '/about/constitution',
    '6-3': '/about/rules',
    '6-4': '/about/centre',
    // 加入我们
    '7-1': '/join/volunteer/general',
    '7-2': '/join/volunteer/professional',
    '7-3': '/join/volunteer/university',
    '7-4': '/join/contact'
  };

  // 示例登录验证（仅针对公益模块）
  if (key.startsWith('2')) {
    isLogin(routes[key]);
  } else {
    router.push(routes[key]);
  }
};

const isLogin = (path: string) => {
  try {
    const token = localStorage.getItem('access_token');
    const identity = localStorage.getItem("user_identity");
    if (token && identity && path.includes(identity)) {
      router.push(path);
    } else {
      router.push('/login');
    }
  } catch (error) {
    console.error("登录验证错误", error);
    router.push('/login');
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
}

/* 上半部分：Logo Header */
.header-top {
  width:80%;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  /* 改为白色边框，使整体更柔和 */
  border-bottom: 2px solid #ffffff;
}

/* 左侧：Logo 与平台名称 */
.logo-and-name {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  width: 60px;
  height: auto;
}

.platform-name {
  /*改成楷体字体*/
  font-family: KaiTi;
  font-size: 30px;
  font-weight: bold;
  color: #333;
  white-space: nowrap;
}

/* 中间：标语 */
.slogan {
  font-family: KaiTi;
  text-align: center;
  flex-grow: 1;
}

.slogan h1 {
  font-size: 26px;
  font-weight: bold;
  color: #d9534f;
  margin: 0;
}

/* 右侧：搜索框 */
.search-box {
  width: 280px;
}

/* 下半部分：导航菜单 */
.nav-menu {
  width:80%;
  margin: 0 auto;
}
/* 让菜单整体更美观，可在这里加一些间距 */
.nav-menu-container el-menu {
  /* 如果想稍微加点上/下内边距 */
  padding: 0 10px;
}
</style>
