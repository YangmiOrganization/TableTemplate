import * as tslib_1 from "tslib";
import { Vue, Component } from 'vue-property-decorator';
export class Page {
    constructor(page = 1, limit = 10, total = 0) {
        this.page = 1;
        this.limit = 10;
        this.total = 0;
        this.page = page;
        this.limit = limit;
        this.total = total;
    }
}
let PageMixin = class PageMixin extends Vue {
    constructor() {
        super(...arguments);
        this.pageObj = new Page();
        this.queryParams = () => { };
        this.tableData = [];
    }
    created() {
        this.useMethod();
    }
    search() {
        this.pageObj.page = 1;
        this.useMethod();
    }
    ;
    handleSizeChange(val) {
        this.pageObj.limit = val;
        this.useMethod();
    }
    ;
    handleCurrentChange(val) {
        this.pageObj.page = val;
        this.useMethod();
    }
    ;
    getQueryParams() {
        console.log('混入的getQueryParams:%o', { ...this.queryParams, ...this.pageObj });
        let queryParams = { ...this.queryParams, ...this.pageObj };
        delete queryParams['total'];
        return queryParams;
    }
    useMethod() {
        this[this.method]();
    }
    ;
};
PageMixin = tslib_1.__decorate([
    Component
], PageMixin);
export default PageMixin;
