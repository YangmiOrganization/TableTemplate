<template>
  <div>
    grand-son<input  @input="$emit('test1',$event.target.value)"/>
    $attrs: {{$attrs}}
  </div>
</template>

<script>
export default {
  name: 'grand-son',
  data () {
    return {}
  },
  created () {
    this.$emit('test1', 1)
  },
  methods: {
  }
}
</script>
