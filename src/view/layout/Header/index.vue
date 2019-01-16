<template>
  <div class="header">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="logo">
        <img  src="../../../assets/logo.png"  alt="element-logo" class="nav-logo">
        <b>后台管理系统</b>
      </div>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项一</el-menu-item>
        <el-menu-item index="2-2">选项二</el-menu-item>
        <el-menu-item index="2-3">选项三</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><img class="headerPhoto" src="../../../assets/headPhoto.jpg"></template>
        <template slot="title">{{username}}(系统管理员)</template>
        <el-menu-item index="3-2" @click="signOut">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      activeIndex: '1',
      username: window.localStorage.getItem('username')
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    signOut () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="scss">
  .logo {
    outline: none;
  }
  .header {
    width: 100%;
    position: fixed;
    z-index: 99;
    .el-menu-demo {
      width: 100%;
      min-width: 500px;
      border-radius: 0;
      display: flex;
      .menuSub {
        flex: 6;
        position: relative;
      }
      .logo {
        flex: 2;
        position: relative;
        top: 10px;
        left: 10px;
      }
      .headerPhoto {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .nav-logo {
        width: 50px;
        height: 40px;
        border-radius: 10px;
      }
    }
  }
</style>
