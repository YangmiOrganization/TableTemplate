<template>
  <el-dialog
    v-bind="$attrs"
    v-on="$listeners">
    <template slot="title">
      <slot name="title"></slot>
    </template>
    <slot></slot>
    <template slot="footer">
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>
<script>
export default {
  name: 'base-dialog',
  components: {},
  props: {},
  data () {
    return {}
  },
  created () {},
  mounted () {},
  activated () {},
  methods: {},
  computed: {},
  watch: {}
}
</script>

<style scoped>
</style>
