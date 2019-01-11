export const TABLE_MIXINS = {
  data () {
    return {
      pageObj: { page: 1, limit: 10, total: 0 },
      queryParams: {},
      tableData: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      console.log('这是混入的初始化方法')
      this.getTableData()
    },
    // 查询按钮
    search () {
      this.pageObj.page = 1
      this.init()
    },
    // 分页长度改变
    handleSizeChange (val) {
      this.pageObj.limit = val
      this.init()
    },
    // 分页页码改变
    handleCurrentChange (val) {
      this.pageObj.page = val
      this.init()
    },
    getQueryParams () {
      let queryParams = { ...this.queryParams, ...this.pageObj }
      delete queryParams['total']
      return queryParams
    }
  }
}

export default {
  TABLE_MIXINS
}
