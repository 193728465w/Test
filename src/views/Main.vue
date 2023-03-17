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
        <common-tag />
        <el-main>
          <router-view > </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
<script>
import CommonAside from '../components/CommonAside.vue'
import Header from '../components/Header.vue';
// import Home from '../views/Home.vue';
import CommonTag from  '../components/CommonTag.vue'
export default {
  data() {
    return {}
  },
  components: {
    CommonAside,
    Header,
    CommonTag
  }
}
</script>
  
<style lang="less" scoped>
.el-header{
  padding:0;
}
</style>