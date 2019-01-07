<template>
  <div>
    ProviderInjectChildren:{{user}}
    <slot name="aaa">孙组建插槽</slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject, Model } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class ProviderInjectChildren extends Vue {
  @Inject('user') user;
}
</script>
