<template>
  <div>
    <provider-inject-children>
      <template slot="aaa">
        <slot name="aaa"></slot>
      </template>
    </provider-inject-children>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator'
import ProviderInjectChildren from './ProviderInjectChildren.vue'

@Component({
  components: {
    ProviderInjectChildren
  }
})
export default class ProviderInject extends Vue {
}
</script>
