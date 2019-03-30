<template>
  <el-form ref="form" :model="form"  :rules="rules" v-bind="$attrs" v-on="$listeners">
    <template v-for="(item,$index) in formArray">
      <slot v-if="item.slot" :name="item.slot">插槽:{{item.slot}}</slot>
      <el-form-item v-else :label="item.label"  :prop="item.key" :key="$index" >
        <base-form-item   :form="form" :item="item" ></base-form-item>
      </el-form-item>
    </template>
    <slot>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </slot>
  </el-form>
</template>

<script>
import BaseFormItem from './base-form-item'
export default {
  name: 'base-form',
  components: { BaseFormItem },
  props: {
    formArray: {
      type: Array,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.$emit('submitSuccess')
        } else {
          console.log('error submit!!')
          this.$emit('submitError')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
