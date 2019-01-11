<template>
  <el-table
    :span-method="spanMethod"
    @row-click="handleRowClick"
    @cell-click="handleCellClick"
    @selection-change="handleSelectionChange"
    :data="tableData"
    border
    stripe
    style="width: 100%">
    <template v-for="(i,$index) in headers">
      <table-column :col="i" :key="`${$index}`">
        <template v-if="i.slot" :slot="i.slot" slot-scope="{scope}">
          <slot :name="i.slot" :scope="scope">{{i.slot}}</slot>
        </template>
     </table-column>
    </template>
  </el-table>
</template>

<script>
import TableColumn from './TableColumn.vue'
export default {
  name: 'table-Template',
  props: {
    spanMethod: { type: Function },
    headers: { type: Array, required: true },
    tableData: { type: Array, required: true }
  },
  components: { TableColumn },
  methods: {
    handleSelectionChange (val) {
      this.$emit('selectionChange', val)
    },
    handleRowClick (row, event, column) {
      this.$emit('handleRowClick', row, event, column)
    },
    handleCellClick (row, column, cell, event) {
      this.$emit('handleCellClick', row, column, cell, event)
    }
  }
}
</script>
