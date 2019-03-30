<template>
  <transition>
    <el-input v-bind="$attrs" v-on="$listeners" v-if="item.type == 'input'" v-model="form[item.key]" key="input"></el-input>
    <el-select v-bind="$attrs" v-on="$listeners" v-else-if="item.type == 'select'" v-model="form[item.key]" key="select">
      <el-option v-for="(option,$optionIndex) in item.options" :key="$optionIndex" :label="option.label"  :value="option.value"></el-option>
    </el-select>

    <el-date-picker v-bind="$attrs" v-on="$listeners" key="date"  v-else-if="item.type == 'date'"  type="date" placeholder="选择日期" v-model="form[item.key]" style="width: 100%;"></el-date-picker>
    <el-time-picker v-bind="$attrs" v-on="$listeners" key="time" v-else-if="item.type == 'time'"  type="fixed-time" placeholder="选择时间" v-model="form[item.key]" style="width: 100%;"></el-time-picker>
    <el-switch v-bind="$attrs" v-on="$listeners" key="switch" v-else-if="item.type == 'switch'"  v-model="form[item.key]"></el-switch>
    <el-checkbox-group v-bind="$attrs" v-on="$listeners" key="checkbox" v-else-if="item.type == 'checkbox'"  v-model="form[item.key]">
      <el-checkbox v-for="(option,$optionIndex) in item.options" :key="$optionIndex" :label="option.label" :name="item.value" :value="option.value"></el-checkbox>
    </el-checkbox-group>
    <el-radio-group v-bind="$attrs" v-on="$listeners" key="radio" v-else-if="item.type == 'radio'"  v-model="form[item.key]">
      <el-radio v-for="(option,$optionIndex) in item.options" :key="$optionIndex" :label="option.label"  :value="option.value"></el-radio>
    </el-radio-group>
    <el-input v-bind="$attrs" v-on="$listeners" key="textarea" v-else-if="item.type == 'textarea'"  type="textarea" v-model="form[item.key]"></el-input>
  </transition>
</template>

<script>

export default {
  name: 'base-form-item',
  components: {},
  props: {
    form: {
      type: Object,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
