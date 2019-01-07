<template>
  <div>
      <input  type="checkbox" :checked="checked" @change="change">
      子组件:{{checked}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Children extends Vue {
  @Model('change') checked: boolean = false;
  change (ev:any) {
    this.$emit('change', ev.target.checked)
  }
}
</script>
