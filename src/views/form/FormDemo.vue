<template>
  <base-form ref="base-form"  @submitSuccess="submitSuccess" :form="form" :formArray="formArray" :rules="rules" label-width="120px">
    <template slot="array">
      <el-form-item
        v-for="(item, index) in form.array"
        :label="`${index}`"
        :key="'array'+index"
        :prop="'array.' + Number(index)"
        :rules="{
          required: true, message: '不能为空', trigger: 'blur'
        }">
        <el-input v-model="form.array[index]"></el-input><el-button v-if="index != 0" @click.prevent="remove(index)">删除</el-button>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
      <el-button @click="add">新增</el-button>
    </el-form-item>
  </base-form>
</template>

<script>

export default {
  name: 'form-demo',
  components: {
  },
  props: {},
  data () {
    return {
      arr: [
        { name: 'zs' }
      ],
      formArray: [
        { label: '活动名称', key: 'name', type: 'input' },
        { label: '请选择活动区域',
          key: 'region',
          type: 'select',
          options: [
            { label: '区域一', value: 'shanghai' },
            { label: '区域二', value: 'beijing' }
          ] },
        { label: '活动时间', key: 'date1', type: 'date' },
        { label: '选择时间', key: 'date2', type: 'time' },
        { label: '即时配送', key: 'delivery', type: 'switch' },
        { label: '即时配送',
          key: 'type',
          type: 'checkbox',
          options: [
            { label: '美食/餐厅线上活动', value: '1' },
            { label: '地推活动', value: '2' }
          ] },
        { label: '特殊资源',
          key: 'resource',
          type: 'radio',
          options: [
            { label: '线上品牌商赞助', value: '1' },
            { label: '线下场地免费', value: '2' }
          ] },
        { label: '活动形式', key: 'desc', type: 'textarea' },
        { label: '动态添加', slot: 'array' }
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        array: [0, 1]
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    add () {
      this.form.array.push(undefined)
    },
    remove (index) {
      console.log(index)
      this.form.array.splice(index, 1)
    },
    submitForm (formName) {
      this.$refs['base-form'].submitForm(formName)
    },
    submitSuccess () {
      console.log('submitSuccess')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
