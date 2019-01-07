<template>
  <el-menu :default-openeds="['0']" style="text-align: center;width: 200px">
    <el-submenu :index="`${$index}`" v-for="(i,$index) in menus" :key="$index">
      <template slot="title"><i :class="i.class"></i>{{i.meta.title}}</template>
      <el-menu-item-group>
        <router-link :to="`${i.path}/${children.path}`" v-for="(children,$index2) in i.children" :key="`${$index2}`">
          <el-menu-item :index="`${$index}-{$index2}`">{{children.meta.title}}</el-menu-item>
        </router-link>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Menu extends Vue {
  menus:Array<object> = [];
  isCollapse:boolean = true;
  created () {
    // @ts-ignore
    this.menus = this.$router.options.routes.filter((item:any) => !item.hidden)
  }
}
</script>
