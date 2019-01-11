<template>
  <el-container style="border: 1px solid #eee">
    <el-aside width="fit-content"  style="background-color: rgb(238, 241, 246);position: fixed" :style="`height:${height}px`">
      <el-scrollbar style="height: 100%">
        <menus></menus>
      </el-scrollbar>
    </el-aside>

    <transition name="v" mode="out-in">
      <el-container :style="`margin-left: ${collapse?65:200}px`">
      <el-header style="font-size: 12px;font-color: white;position: fixed;z-index: 1000;padding: 0" :style="`width: calc(100% - ${collapse?65:200}px)`">
        <top></top>
      </el-header>

      <el-main style="margin-top: 60px">
        <transition  name="fade-transform" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
    </transition>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Menus from './Menu.vue'
import Top from './Top.vue'

export default {
  name: 'home',
  components: { Menus, Top },
  data () {
    return {
      height: 500
    }
  },
  computed: {
    ...mapGetters([
      'collapse'
    ])
  },
  mounted () {
    this.initHeight()
    window.addEventListener('resize', () => {
      this.initHeight()
    })
  },
  methods: {
    initHeight () {
      this.height = window.innerHeight
    }
  }
}
</script>

<style>
  .el-header {
    background-color: rgb(84, 92, 100);
    color: #333;
    line-height: 60px;
  }
  .el-scrollbar__wrap{overflow-x:hidden!important;}
</style>
