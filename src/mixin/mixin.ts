import { Vue, Component } from 'vue-property-decorator'

 export class Page {
      page:number = 1;
      limit:number = 10;
      total:number = 0;
      constructor (page:number = 1, limit:number = 10, total:number = 0) {
        this.page = page
        this.limit = limit
        this.total = total
      }
}
/**
 * mixins
 */
@Component
export default class PageMixin extends Vue {
  pageObj: Page = new Page();
  queryParams:Object = () => {};
  tableData: Array<object> = [];
  created(){
    this.useMethod()
  }
  // 查询按钮
  search () {
    this.pageObj.page = 1
    this.useMethod()
  };
  // 分页长度改变
  handleSizeChange (val:number) {
    this.pageObj.limit = val
    this.useMethod()
  };
  // 分页页码改变
  handleCurrentChange (val:number) {
    this.pageObj.page = val
    this.useMethod()
  };
  getQueryParams () {
    console.log('混入的getQueryParams:%o',{ ...this.queryParams, ...this.pageObj })
    let queryParams = { ...this.queryParams, ...this.pageObj }
    delete queryParams['total']
    return queryParams
  }
  useMethod () {
    // @ts-ignore
    this[this.method]()
  };
}
