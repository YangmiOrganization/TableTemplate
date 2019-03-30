<template>
  <el-upload
    ref="upload"
    v-bind="$attrs"
    v-on="$listeners"
    >
    <template slot="trigger">
      <slot name="trigger"></slot>
    </template>
    <slot></slot>
    <template slot="tip">
      <slot name="tip"></slot>
    </template>
  </el-upload>
</template>
<script>
export default {
  name: 'base-upload',
  components: {},
  props: {},
  data () {
    return {}
  },
  created () {},
  mounted () {},
  activated () {},
  methods: {
    clearFiles () {
      this.$refs['upload'].clearFiles()
    },
    abort () {
      this.$refs['upload'].abort()
    },
    submit () {
      this.$refs['upload'].submit()
    }
  },
  computed: {},
  watch: {}
}
</script>

<style scoped>
</style>
