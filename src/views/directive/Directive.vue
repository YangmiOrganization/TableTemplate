<template>
  <div>
    <p>自定义指令输入框保留两位小数</p>
    <div>
      原生input:<input type="number" v-model="num" v-native-float/>{{num}}
    </div>
    <div>
      element-input:<el-input type="number" v-model="el_num" v-el-float/>{{el_num}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'directive',
  data () {
    return {
      num: '',
      el_num: ''
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
