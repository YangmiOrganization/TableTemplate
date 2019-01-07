<template>
  <transition>
    <!--复选框-->
    <el-table-column v-if="i.type == 'selection'" type="selection" :key="`${$index}col`" label="" width="55"> </el-table-column>
    <!--序号-->
    <el-table-column v-else-if="i.type == 'index'" type="index" :key="`${$index}col`" label="序号"> </el-table-column>
    <!--展开行-->
    <el-table-column v-else-if="i.type == 'expand'" type="expand" :key="`${$index}col`">
      <template slot-scope="scope">
        <slot :name="i.slot" :scope="scope"></slot>
      </template>
    </el-table-column>
    <el-table-column v-else :prop="i.prop" :label="i.label"  :width="i.width" :min-width="i.minWidth"  :key="$index" :fixed="i.fixed">
      <template v-if="!i.children" slot-scope="scope">
        <!--默认显示文本-->
        <template  v-if="!i.slot">{{scope.row[i.prop]}}</template>
        <!--显示自定义内容-->
        <slot  v-else :name="i.slot" :scope="scope"></slot>
      </template>
      <!--如果是复杂表头-->
      <template v-if="i.children" v-for="(children,$childrenIndex) in i.children">
         <table-column :i="children" :$index="$childrenIndex" :key="`${$childrenIndex}col`">
           <template v-if="children.slot" :slot="children.slot" slot-scope="{scope}">
             <slot :name="children.slot" :scope="scope"></slot>
           </template>
         </table-column>
      </template>
    </el-table-column>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TableColumn extends Vue {
  @Prop()i!:object
  @Prop()$index!:number
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
