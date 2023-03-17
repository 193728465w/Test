<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <h3>{{ !isCollapse ? '后台管理系统':'后台' }}</h3>
    <el-menu-item @click="clickMune(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="item in haveChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="switem in item.children" :key="switem.path">
        <el-menu-item @click="clickMune(switem)" :index="switem.path">{{ switem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: '/',
          name: 'home',
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManger/MallManger'
        },
        {
          path: '/User',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManger/UserManger'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/PageOne',
              name: 'PageOne',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/PageTwo',
              name: 'PageTwo',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            },
          ]
        },
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMune(item) {
      console.log(this.$route.path , item.path)
      if(this.$route.path !== item.path ){
        this.$router.push(item.path)
      }
      this.$store.commit('selectMenu',item)
    },
  },
  computed: {
    //没有子菜单
    noChildren() {
      return this.menuData.filter(item => !item.children)
    },
    //没有子菜单
    haveChildren() {
      return this.menuData.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse){
  width: 200px;
  height:100vh;
}
.el-submenu .el-menu-item {
  min-width:min-content
}
.el-menu {
  height:100vh; 
  border-right: none;
  h3 {
    color:#fff;
    text-align: center;
    line-height:48px;
    font-size: 16px ;
    font-weight: 400px;
  }
}
</style>