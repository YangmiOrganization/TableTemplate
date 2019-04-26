<template>
  <el-dialog
    :close-on-click-modal="false"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template slot="title">
      <slot name="title" />
    </template>
    <slot />
    <template slot="footer">
      <slot name="footer" />
    </template>
  </el-dialog>
</template>
<script>
export default {
  name: 'BaseDialog',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  activated () {},
  methods: {}
}
</script>

<style scoped>
</style>
