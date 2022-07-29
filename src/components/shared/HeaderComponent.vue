<template>
  <div class="header">
    <div class="logo">
      <span>Stargazer</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    HeaderComponent,
  },
})
export default class HeaderComponent extends Vue {}
</script>
