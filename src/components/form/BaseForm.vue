<template>
  <el-form ref="form" v-bind="$attrs" v-on="$listeners">
    <slot />
    <slot name="foot">
      <el-form-item v-if="showDefaultFoot">
        <el-button type="primary" @click="submit('form')">
          确定
        </el-button>
        <!--<el-button @click="resetFields('form')">重置</el-button>-->
        <el-button v-if="showCancel" @click="cancel">
          取消
        </el-button>
      </el-form-item>
    </slot>
  </el-form>
</template>

<script>
export default {
  name: 'BaseForm',
  props: {
    showCancel: {
      type: Boolean,
      default: true
    },
    showDefaultFoot: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    cancel () {
      this.resetFields('form')
      this.$emit('cancel')
    },
    submit (formName = 'form') {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!!')
          this.$emit('submit')
        } else {
          console.log('error submit!!')
          this.$emit('submitError')
          return false
        }
      })
    },
    validateElement (val) { this.$refs['form'].validateElement(val) },
    validateField (val) { this.$refs['form'].validateField(val) },
    resetFields (formName = 'form') { this.$refs[formName].resetFields() },
    clearValidate (val) { this.$refs['form'].clearValidate(val) }
  }
}
</script>

<style lang="scss" scoped>
</style>
