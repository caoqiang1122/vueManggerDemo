<template>
  <div class="header">
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <div class="logo">
        <img  src=""  alt="element-logo" class="nav-logo">
      </div>
      <el-submenu index="3">
        <template slot="title">{{username}}(系统管理员)</template>
        <el-menu-item index="2-1" @click="signOut">退出登录</el-menu-item>
      </el-submenu>
      <el-menu-item index=""></el-menu-item>
    </el-menu>
    <div class="line"> </div>
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

<style lang="scss" scoped>
  .logo {
    outline: none
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
        flex: 1;
        position: relative;
        top: 10px;
        left: 10px;
      }
    }

  }
</style>
