<template>
  <el-table
    v-bind="$attrs"
    :span-method="spanMethod"
    :data="tableData"
    border
    stripe
    style="width: 100%"
    v-on="$listeners"
    @row-click="handleRowClick"
    @cell-click="handleCellClick"
    @selection-change="handleSelectionChange"
  >
    <slot />
    <template v-for="(i,$index) in headers">
      <table-column :key="`${$index}`" :col="i">
        <template v-if="i.slot" :slot="i.slot" slot-scope="{scope}">
          <slot :name="i.slot" :scope="scope">
          </slot>
        </template>
      </table-column>
    </template>
  </el-table>
</template>

<script>
import TableColumn from './BaseTableColumn.vue'
export default {
  name: 'TableTemplate',
  components: { TableColumn },
  props: {
    spanMethod: { type: Function },
    headers: { type: Array, required: false },
    tableData: { type: Array, required: true }
  },
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
