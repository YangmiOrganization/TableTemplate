<template>
  <el-container style="border: 1px solid #eee">
    <el-aside width="fit-content"  style="background-color: rgb(238, 241, 246)" :style="`height:${height}px`">
      <el-scrollbar style="height: 100%">
        <menus></menus>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="font-size: 12px">
        <top></top>
      </el-header>

      <el-main>
        <transition  name="fade-transform" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menus from './Menu.vue'
import Top from './Top.vue'
  @Component({
    components: {
      Menus, Top
    }
  })
export default class Home extends Vue {
    height: Number = 500;
    mounted () {
      this.height = window.innerHeight
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
