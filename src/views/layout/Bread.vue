<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item key="1">{{current_menu.parent}}</el-breadcrumb-item>
      <el-breadcrumb-item key="2">{{current_menu.title}}</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'bread',
  data () {
    return {
      breadcrumbItem: {
        parent: '',
        title: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'current_menu'
    ])
  },
  created () {
    this.breadcrumbItem = this.$route.meta
  },
  methods: {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
