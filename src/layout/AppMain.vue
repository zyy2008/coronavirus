<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/dashboard">Covid-19</el-menu-item>
        <!-- <el-menu-item index="/covid">Covid-19</el-menu-item> -->
      </el-menu>
    </el-header>
    <el-main>
      <transition name="fade-transform" mode="out-in">
        <el-scrollbar style="height: 100%">
          <router-view />
        </el-scrollbar>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {};
  },
  methods: {
    handleSelect() {},
  },
};
</script>