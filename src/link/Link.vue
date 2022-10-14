<template>
  <a class="k-link">
    <slot />
  </a>
</template>
<script lang="ts">
import "./style/index.less";
import { defineComponent } from "vue";
export default defineComponent({
  name: "k-link",
  setup() {
    return {};
  },
});
</script>
