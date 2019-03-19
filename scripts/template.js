// template.js
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
    <div>
      <!--table模板-->
      <table-component
        :pageObj="pageObj"
        :headers="headers"
        :data="tableData"
        @sizeChange="sizeChange"
        @currentChange="currentChange">
       <template slot="top-left">
            <el-button size="mini" type="primary" @click="add">新增</el-button>
          </template>
          <template slot="top-right">
              <el-input size="mini" v-model="queryParams.keyword"/>
            <el-button size="mini" type="primary" @click="search">搜索</el-button>
          </template>
        <!--操作-->
        <template slot="operator" slot-scope="{scope}">
          <el-button size="mini" @click.stop="view(scope.row)">查看</el-button>
          <el-button size="mini" @click.stop="del(scope.row)">删除</el-button>
        </template>
      </table-component>
          <el-dialog
            title="提示"
            @closed="reset"
            :visible.sync="dialogVisible"
            width="530px"
            center
          >
          </el-dialog>
    </div>
</template>
<script>
import { Mixins } from '@/mixins/mixins'
export default {
  name: '${compoenntName}',
  components: {},
  props: {},
  mixins: [ Mixins ],
  data () {
    return {
      dialogVisible:false,
      headers: [
        { prop: 'id', label: 'id'},
        { label: '操作', slot: 'operator', fixed: 'right', width: 180 }
      ],
      queryParams: {
        keyword: ''
      }
    }
  },
  created () {},
  mounted () {},
  activated () {},
  updated () {},
  methods: {
    reset(){},
    add(){
      this.dialogVisible = true
    },
    view(){
      //todo 查看
    },
    del(){
      //todo 删除
    },
    getTableData () {
      // todo
      console.log("获取列表")
    },
  },
  computed: {},
  watch: {}
}
</script>
<style lang="scss" scoped>
</style>
`
  }
}
