<template>
  <div>
  <el-menu :default-openeds="['0']" :collapse="collapse"  class="el-menu-vertical-demo" style="text-align: center;">
    <el-submenu :index="`${$index}`" v-for="(i,$index) in menus" :key="$index">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{i.meta.title}}</span>
      </template>
      <el-menu-item-group>
        <router-link :to="`${i.path}/${children.path}`" v-for="(children,$index2) in i.children" :key="`${$index2}`">
          <el-menu-item :index="`${$index}-{$index2}`">{{children.meta.title}}</el-menu-item>
        </router-link>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'menus',
  data () {
    return {
      menus: []
    }
  },
  computed: {
    ...mapGetters([
      'collapse'
    ])
  },
  created () {
    // @ts-ignore
    this.menus = this.$router.options.routes.filter((item) => item.meta && !item.meta.hidden)
  }
}
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
