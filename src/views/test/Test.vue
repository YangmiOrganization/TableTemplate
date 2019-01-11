<!--suppress ALL -->
<template>
  <!--table模板-->
  <table-layout @sizeChange="handleSizeChange" @currentChange="handleCurrentChange" @handleRowClick="handleRowClick" @handleCellClick="handleCellClick"  :pageObj="pageObj" :headers="headers" @selectionChange="handleSelectionChange" :tableData="tableData">
    <template slot="top-left">
      <el-button type="primary">todo</el-button>
    </template>
    <template slot="top-right">
      <el-input v-model="queryParams.title" placeholder="关键字" style="width: 12rem"></el-input>
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

<script>
import { TABLE_MIXINS } from './../../mixins/table_mixins'
import ArticleApi from './../../assets/api/article'
export default {
  name: 'test',
  mixins: [ TABLE_MIXINS ],
  data () {
    return {
      headers: [
        { type: 'selection' },
        { type: 'expand', slot: 'expand' },
        { type: 'index', fixed: true },
        { prop: 'id', label: 'id' },
        { prop: 'title', label: '书名', tips: true },
        { prop: 'displayTime', label: '发表时间' },
        { prop: 'author', label: '作者' },
        { prop: 'reviewer', label: '审核人' },
        { prop: 'status', label: '状态' },
        { prop: 'pageviews', label: '浏览量' },
        { label: '操作', slot: 'operator', fixed: 'right', width: 180 }
      ],
      queryParams: {
        title: ''
      }
    }
  },
  created () {
  },
  methods: {
    init () {
      console.log('init方法做一些其它事情')
      this.getTableData()
    },
    getQueryParams () {
      console.log('重写getQueryParams')
      let queryParams = { ...this.queryParams, ...this.pageObj }
      delete queryParams['total']
      return queryParams
    },
    async handleView (obj) {
      let res = await ArticleApi.getArticle()
      this.$message.success(`查看对象:${JSON.stringify(obj)}`)
    },
    handleDel (obj) {
      this.$message.success(`删除对象:${JSON.stringify(obj)}`)
    },
    getTableData (pageObj) {
      ArticleApi.getList(this.getQueryParams())
        .then(res => {
          pageObj = pageObj || this.pageObj
          this.pageObj = pageObj || this.pageObj
          this.pageObj.total = res.total
          this.tableData = res.items
        })
    },
    handleSelectionChange (val) {
      console.log(val)
    },
    handleRowClick (row, event, column) {
      console.log('点击行对象:%o', row)
    },
    handleCellClick (row, column, cell, event) {
      console.log('点击单元格对象:%o', cell)
    }
  }
}
</script>
