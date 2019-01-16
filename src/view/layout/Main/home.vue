<template>
  <div class="home">
    <div class="main">
      <div class="top">
        <!-- 自定义标签，默认会加载对应名字的组件vue -->
        <v-header></v-header>
      </div>
      <div class="left">
        <v-menu></v-menu>
      </div>
      <div class="content">
        <!-- 添加一个element-ui内置的过渡动画 -->
        <transition name="el-zoom-in-top">
          <!-- 通过路由渲染不同内容的界面 -->
          <router-view v-show="show"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../Header'
import leftMenu from '../LeftMenu'
export default {
  data () {
    return {
      show: true
    }
  },
  components: {
    'v-header': Header,
    'v-menu': leftMenu
  }
}
</script>

<style lang="scss">
@import url('../../../common/scss/element-variables.scss');

$commonColor: '#20a0ff';
.home {
  .content {
    position: absolute;
    left: 200px;
    top: 70px;
    bottom: 0;
    overflow: scroll;
    width: calc(100% - 210px);
  }
  .content::-webkit-scrollbar {
    display: none;
  }
}
</style>
