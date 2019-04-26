<template>
  <div class="box">
    <!--顶部搜索按钮-->
    <div class="top">
      <div class="left">
        <slot name="top-left" />
      </div>
      <div class="right">
        <slot class="right" name="top-right" />
      </div>
    </div>
    <!--table-->
    <div class="table">
      <table-template ref="table" :span-method="spanMethod" :headers="headers" :table-data="tableData" @handleRowClick="handleRowClick" @handleCellClick="handleCellClick" @selectionChange="handleSelectionChange">
        <template v-for="i in headers" :slot="i.slot" slot-scope="{scope}">
          <slot v-if="i.slot" :name="i.slot" :scope="scope">
          </slot>
        </template>
      </table-template>
    </div>
    <!--分页-->
    <div class="pagination" style="text-align: right;margin-top: 10px">
      <slot name="pagination">
        <el-pagination layout="sizes, prev, pager, next, jumper, ->, total, slot" :total="pageObj.total" :page-size="pageObj.limit" :current-page="pageObj.page" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </slot>
    </div>
  </div>
</template>

<script>
import TableTemplate from './BaseTable.vue'
export default {
  name: 'TableLayout',
  components: { TableTemplate },
  props: {
    spanMethod: { type: Function },
    headers: { type: Array, required: true },
    tableData: { type: Array, required: true },
    pageObj: { type: Object, required: true }
  },
  methods: {
    // 分页长度改变
    handleSizeChange (val) {
      this.$emit('sizeChange', val)
    },
    // 分页页码改变
    handleCurrentChange (val) {
      this.$emit('currentChange', val)
    },
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

<style lang="scss" scoped>
  .box{
    .top-content,.middle-content{
        background-color: white;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
      }
  }
  .table{margin-top: 10px}
.top{
  overflow: hidden;
  padding:10px;
  background-color: white;
  &:after{
    content: "";
    clear: both;
  }
  .left{
    float: left;
    line-height: 28px;
  }
  .right{float: right;display: flex}
}
</style>
