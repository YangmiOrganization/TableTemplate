<template>
  <div>
    <p>自定义指令输入框保留两位小数</p>
    <div>
      原生input:<input type="number" v-model="num" v-native-float.num/>{{num}}
      原生input lazy:<input type="number" v-model="lazy_num" v-native-float:lazy.lazy_num/>{{lazy_num}}
    </div>
    <div>
      原生input 对象.属性:<input type="number" v-model="obj.num" v-native-float.obj.num/>{{obj.num}}
      原生input 对象.属性 lazy:<input type="number" v-model="obj.lazy_num" v-native-float:lazy.obj.lazy_num/>{{obj.lazy_num}}
    </div>
    <div>
      element-input:<el-input type="number" v-model="el_num" v-el-float.el_num/>{{el_num}}
    </div>
    <div>
      element-input 对象.属性:<el-input type="number" v-model="obj.el_num" v-el-float.obj.el_num/>{{obj.el_num}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'directive',
  data () {
    return {
      obj: {
        num: '',
        lazy_num: '',
        el_num: '',
        lazy_el_num: ''
      },
      num: '',
      el_num: '',
      lazy_num: '',
      lazy_el_num: ''
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
