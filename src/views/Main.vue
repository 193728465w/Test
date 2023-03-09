<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <CommonAside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <Home />
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
<script>
import CommonAside from '../components/CommonAside.vue'
import Header from '../components/Header.vue';
import Home from '../views/Home.vue';
export default {
  data() {
    return {}
  },
  components: {
    CommonAside,
    Header,
    Home
  }
}
</script>
  
<style lang="less" scoped>
.el-header{
  padding:0;
}
</style>