<template>
  <!--table模板-->
  <table-layout ref="table" @getList="getList" :pageObj="pageObj" :header="header" :tableData="tableData">
    <template slot="top-left">
      <el-button>添加</el-button>
    </template>
    <template slot="top-right">
      <el-input v-model="queryParams.title" placeholder="标题" style="width: 12rem"></el-input>
      <el-button @click="search">搜索</el-button>
    </template>
    <template slot="timestamp" slot-scope="{scope}">
      {{$moment(scope.row.timestamp).format("YYYY-MM-DD HH:MM:SS")}}
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
export default class Test2 extends PageMixins {
    header:Array<object> = [
      { 'prop': 'id', 'label': 'id' },
      { 'prop': 'timestamp', 'label': '时间', 'slot': 'timestamp' },
      { 'prop': 'author', 'label': '作者' },
      { 'prop': 'reviewer', 'label': '审核人' },
      { 'prop': 'title', 'label': '标题', 'tips': true },
      { 'prop': 'forecast', 'label': '预测' },
      { 'prop': 'displayTime', 'label': '出版时间' },
      { 'prop': 'pageviews', 'label': '浏览量' }
    ];
    method:string = 'getList';
    async getList (pageObj:Page) {
      // @ts-ignore
      let res = await this.$get(this.$UrlConstants.ARTICLE_URL + '/list', this.getQueryParams())
      pageObj = pageObj || this.pageObj
      this.pageObj = pageObj || this.pageObj
      this.pageObj.total = res.total
      this.tableData = res.items
    };
}
</script>
