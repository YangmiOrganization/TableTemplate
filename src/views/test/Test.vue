<!--suppress ALL -->
<template>
  <!--table模板-->
  <table-layout ref="table-layout" @getList="getList" :pageObj="pageObj" :header="header" @selectionChange="handleSelectionChange" :tableData="tableData">
    <template slot="top-left">
      <el-button>添加</el-button>
    </template>
    <template slot="top-right">
      <el-date-picker
        value-format="yyyy-MM-dd"
        v-model="queryParams.timeRange"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
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
import TableLayout from '../../components/TableLayout.vue'
import PageMixins from './../../mixin/mixin'

@Component({
  components: {
    TableLayout
  },
  mixins: [PageMixins]
})
export default class Test extends Vue {
  header:Array<object> = [
    { 'type': 'selection' },
    { 'type': 'expand', 'slot':'expand' },
    { 'type': 'index', fixed: true },
    { 'prop': 'name', 'label': '姓名', 'slot': 'name-phone' },
    { 'prop': 'loginName', 'label': '登录名' },
    { 'prop': 'nickName', 'label': '昵称' },
    { 'prop': 'avatar', 'label': '头像', width: 300 ,'slot': 'avatar'},
    { 'prop': 'age', 'label': '年龄' },
    { 'prop': 'status', 'label': '状态' },
    { 'prop': 'acorpName', 'label': '公司名称' },
    { 'prop': 'departmentName', 'label': '部门名称' },
    { 'prop': 'description', 'label': '描述',  },
    { 'prop': 'time', 'label': '时间', children: [
        { 'prop': 'createTime', 'label': '创建时间' },
        { 'prop': 'updateTime', 'label': '更新时间' },
      ] },
    { 'label': '操作','slot': 'operator', fixed: 'right',width: 180 }
  ];
  queryParams:{
    keyword: '',
    timeRange: []
  };
  method:string = 'getList';
  handleView(obj:object){
    console.log("查看对象:%o",obj)
  };
  handleDel(obj:object){
    console.log("删除对象:%o",obj)
  };
  async getList (pageObj:object) {
    let res = await this.$get(this.$UrlConstants.ARTICLE_URL+'/list',this.getQueryParams())
    pageObj = pageObj || this.pageObj
    this.pageObj = pageObj || this.pageObj
    this.pageObj.total = res.total
    this.tableData = res.items
    /*this.$refs['table-layout'].pageObj = pageObj || this.pageObj
    this.$refs['table-layout'].pageObj.total = res.total
    this.$refs['table-layout'].tableData = res.items*/
  };
  // 如果需要对查询条件做特殊处理，这里重写此方法。
  getQueryParams () {
    let queryParams = { ...this.queryParams, ...this.pageObj }
    if(queryParams.timeRange){
      queryParams['startTime'] = queryParams.timeRange[0]
      queryParams['endTime'] = queryParams.timeRange[1]
    }
    delete queryParams['timeRange']
    delete queryParams['total']
    return queryParams;
  };
  handleSelectionChange(val:Array<object>){
    console.log(val)
  }
}
</script>
