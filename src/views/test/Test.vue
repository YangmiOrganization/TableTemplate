<!--suppress ALL -->
<template>
  <!--table模板-->
  <table-layout @handleRowClick="handleRowClick" @handleCellClick="handleCellClick" ref="table-layout" :spanMethod="spanMethod" @getList="getList" :pageObj="pageObj" :header="header" @selectionChange="handleSelectionChange" :tableData="tableData">
    <template slot="top-left">
      <el-button type="primary">todo</el-button>
    </template>
    <template slot="top-right">
      <el-input v-model="queryParams.keyword" placeholder="关键字" style="width: 12rem"></el-input>
      <el-button @click="search">搜索</el-button>
    </template>
    <!---->
    <template slot="expand" slot-scope="{scope}">
      <el-form label-position="left" inline class="demo-table-expand">
        <el-form-item label="名称">
          {{scope.row.name}}
        </el-form-item>
      </el-form>
    </template>
    <!--姓名电话-->
    <template slot="name-phone" slot-scope="{scope}">
      <div> <i class="el-icon-time"></i>{{scope.row.name}}</div>
      <div> <i class="el-icon-time"></i>{{scope.row.phone}}</div>
    </template>
    <!--头像-->
    <template slot="avatar" slot-scope="{scope}">
      <img :src="scope.row.avatar" alt="头像">
    </template>
    <!--操作-->
    <template slot="operator" slot-scope="{scope}">
      <el-button @click="handleView(scope.row)">查看</el-button>
      <el-button @click="handleDel(scope.row)">删除</el-button>
    </template>
  </table-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TableLayout from '../../components/table/TableLayout.vue'
import PageMixins, { Page } from './../../mixin/mixin'

@Component({
  components: {
    TableLayout
  },
  mixins: [PageMixins]
})
export default class Test extends PageMixins {
  spanMethod ({ row, column, rowIndex, columnIndex }) {
    if (columnIndex === 2) {
      if (rowIndex % 2 === 0) {
        return {
          rowspan: 2,
          colspan: 1
        }
      } else {
        return {
          rowspan: 0,
          colspan: 0
        }
      }
    }
  };
  header:Array<object> = [
    { type: 'selection' },
    { type: 'expand', slot: 'expand' },
    { type: 'index', fixed: true },
    { prop: 'name', label: '姓名', slot: 'name-phone' },
    { prop: 'loginName', label: '登录名' },
    { prop: 'nickName', label: '昵称' },
    { prop: 'avatar', label: '头像', width: 300, slot: 'avatar' },
    { prop: 'age', label: '年龄' },
    { prop: 'status', label: '状态' },
    { prop: 'acorpName', label: '公司名称' },
    { prop: 'departmentName', label: '部门名称' },
    { prop: 'description', label: '描述' },
    { prop: 'time',
      label: '时间',
      children: [
        { prop: 'createTime', label: '创建时间' },
        { prop: 'updateTime', label: '更新时间' }
      ] },
    { label: '操作', slot: 'operator', fixed: 'right', width: 180 }
  ];
  method:string = 'getList';
  handleView (obj:object) {
    console.log('查看对象:%o', obj)
  };
  handleDel (obj: object) {
    console.log('删除对象:%o', obj)
  };
  async getList (pageObj?:Page) {
    // @ts-ignore
    let res = await this.$get(this.$UrlConstants.ARTICLE_URL + '/list', this.getQueryParams())
    pageObj = pageObj || this.pageObj
    this.pageObj = pageObj || this.pageObj
    this.pageObj.total = res.total
    this.tableData = res.items
  };
  handleSelectionChange (val:Array<object>) {
    console.log(val)
  }
  handleRowClick (row:any, event:any, column:any) {
    console.log('点击行对象:%o', row)
  }
  handleCellClick (row:any, column:any, cell:any, event:any) {
    console.log('点击单元格对象:%o', cell)
  }
}
</script>
