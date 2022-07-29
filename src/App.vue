<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<script lang="ts">
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import FooterComponent from "@/components/shared/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
