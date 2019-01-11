<template>
  <div>
    son:<input v-bind="$attrs" @input="$emit('update:value',$event.target.value)"/>
    <grand-son v-bind="$attrs" v-on="$listeners" ></grand-son>
  </div>
</template>

<script>
import GrandSon from './GrandSon'
export default {
  components: { GrandSon },
  name: 'son',
  data () {
    return {}
  },
  created () {
  },
  methods: {
  }
}
</script>
