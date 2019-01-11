<template>
  <div>
    测试v-bind="$attrs" v-on="$listeners" <br/>
    parent:{{inputValue}}
    <children placeholder="请输入" :value.sync="inputValue" @test1="test1" @test2="test2"></children>
  </div>
</template>

<script>
import Children from './Son'
import axios from 'axios'
export default {
  name: 'parent',
  components: { Children },
  data () {
    return {
      inputValue: ''
    }
  },
  created () {
    axios.get('http://localhost:8090/mode2/DataOne')
      .then(res => {
        console.log(res)
      })
  },
  methods: {
    test1 (val) {
      console.log('test1:' + val)
    },
    test2 (val) {
      console.log('test2:' + val)
    }
  }
}
</script>
