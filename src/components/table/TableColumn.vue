<template>
  <transition>
    <!--复选框-->
    <el-table-column v-if="col.type == 'selection'" type="selection" label="" width="55"> </el-table-column>
    <!--序号-->
    <el-table-column v-else-if="col.type == 'index'" type="index" label="序号"> </el-table-column>
    <!--展开行-->
    <el-table-column v-else-if="col.type == 'expand'" type="expand">
      <template slot-scope="scope">
        <slot :name="col.slot" :scope="scope"></slot>
      </template>
    </el-table-column>
    <el-table-column v-else :prop="col.prop" :show-overflow-tooltip="col.tips" :align="col.center || 'center'" :label="col.label"  :width="col.width" :min-width="col.minWidth"  :fixed="col.fixed">
      <template v-if="!col.children" slot-scope="scope">
        <!--默认显示文本-->
        <template  v-if="!col.slot">{{scope.row[col.prop]}}</template>
        <!--显示自定义内容-->
        <slot  v-else :name="col.slot" :scope="scope"></slot>
      </template>
      <!--如果是复杂表头-->
      <template v-for="(children,$index) in col.children">
         <table-column :col="children" :key="`${$index}`">
           <template v-if="children.slot" :slot="children.slot" slot-scope="{scope}">
             <slot :name="children.slot" :scope="scope"></slot>
           </template>
         </table-column>
      </template>
    </el-table-column>
  </transition>
</template>

<script>
export default {
  name: 'table-column',
  props: {
    col: {
      type: Object, required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
