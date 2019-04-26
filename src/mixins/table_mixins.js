export const Mixins = {
  data () {
    return {
      pageObj: { page: 1, limit: 10, total: 0 },
      queryParams: {},
      ApiObject: {},
      tableData: [],
      dialogVisible: false
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getTableData()
    },
    async getTableData () {
      let result = await this.ApiObject.page(this.getQueryParams())
      result = {
        code: 1,
        message: '操作成功',
        data: {
          records: result.items,
          total: result.total
        }
      }
      this.tableData = result.data.records
      this.pageObj.total = ~~result.data.total
    },
    // 查询按钮
    search () {
      this.pageObj.page = 1
      this.init()
    },
    // 分页长度改变
    sizeChange (val) {
      this.pageObj.limit = val
      this.init()
    },
    // 分页页码改变
    currentChange (val) {
      this.pageObj.page = val
      this.init()
    },
    // 获取搜索条件
    getQueryParams () {
      const queryParams = { ...this.queryParams, ...this.pageObj }
      if (queryParams.timeRange && queryParams.timeRange.length > 1) {
        queryParams.start_time = queryParams['timeRange'][0]
        queryParams.end_time = queryParams['timeRange'][1]
      }
      delete queryParams['total']
      delete queryParams['timeRange']
      return queryParams
    },
    /* 表单重置 */
    reset () {
      delete this.dialogForm.id
      this.dialogForm = this.$utils.reset(this.dialogForm)
      const form = this.$refs['form']
      form && form.resetFields()
      this.resetAfter()
    },
    // 扩展方法
    resetAfter () {},
    add () {
      this.dialogVisible = true
    },
    async edit (obj) {
      this.editBefore()
      const res = await this.ApiObject.get(obj.id)
      this.dialogForm = { ...res.data }
      this.dialogVisible = true
      this.editAfter(res)
    },
    editBefore () {},
    editAfter () {},
    submitBefore () {},
    async submit () {
      this.submitBefore()
      let result
      const data = { ...this.dialogForm }
      if (this.dialogForm.id) {
        result = await this.ApiObject.update(data)
      } else {
        result = await this.ApiObject.add(data)
      }
      this.$message.success(result.message)
      this.dialogVisible = false
      this.init()
    },
    del (obj) {
      this.$confirm('确认删除?', '删除')
        .then(async _ => {
          const result = await this.ApiObject.del(obj.id)
          this.init()
          this.$message.success(result.message)
        })
    },
    exportExcel () {
      this.ApiObject.export(this.getQueryParams())
    }
  }
}
