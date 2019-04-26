<!--suppress ALL -->
<template>
  <!--table模板-->
  <base-table-layout
    :pageObj="pageObj"
    :headers="headers"
    :tableData="tableData"
    @sizeChange="sizeChange"
    @currentChange="currentChange">
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
  </base-table-layout>
</template>

<script>
import { Mixins } from '../../mixins/table_mixins'
import ArticleApi from '../../api/module/ArticleApi'
export default {
  name: 'test',
  mixins: [ Mixins ],
  data () {
    return {
      ApiObject: ArticleApi,
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
    async handleView (obj) {
      let res = await ArticleApi.getArticle()
      this.$message.success(`查看对象:${JSON.stringify(obj)}`)
      this.$message.success(`res:${JSON.stringify(res)}`)
    }
  }
}
</script>
