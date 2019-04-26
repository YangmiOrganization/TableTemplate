<template>
  <div>
    <el-button type="text" @click="visible = true">封装后的dialog组件</el-button>
    <el-button type="text" @click="visible2 = true">原来的dialog组件</el-button>

    <base-dialog title="Dialog" center :visible.sync="visible" @open="open" @opened="opened" @close="close" @closed="closed">
      <div slot="title"> title </div>
      <div> body </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </span>
    </base-dialog>

    <el-dialog title="Dialog" center :visible.sync="visible2" @open="open" @opened="opened" @close="close" @closed="closed">
      <div slot="title"> title </div>
      <div> body </div>
      <span slot="footer">
        <el-button @click="visible2 = false">取 消</el-button>
        <el-button type="primary" @click="visible2 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'dialog-demo',
  components: { },
  props: {},
  data () {
    return {
      visible: false,
      visible2: false
    }
  },
  created () { },
  mounted () { },
  activated () {},
  methods: {
    open () { console.log('open') },
    opened () { console.log('opened') },
    close () { console.log('close') },
    closed () { console.log('closed') }
  },
  computed: {},
  watch: {}
}
</script>

<style scoped>
</style>
