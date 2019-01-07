<template>
  <el-table
    @selection-change="handleSelectionChange"
    :data="tableData"
    border
    stripe
    style="width: 100%">
    <template v-for="(i,$index) in header">
      <table-column :i="i" :$index="$index" :key="`${$index}col`">
        <template v-if="i.slot" :slot="i.slot" slot-scope="{scope}">
          <slot :name="i.slot" :scope="scope">{{i.slot}}</slot>
        </template>
     </table-column>
    </template>
  </el-table>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mixins } from 'vue-property-decorator'
import TableColumn from './TableColumn.vue'

@Component({
  components: { TableColumn }
})
export default class TableTemplate extends Vue {
  @Prop() header;
  @Prop() tableData;
  handleSelectionChange (val) {
    this.$emit('selectionChange', val)
  }
}
</script>
