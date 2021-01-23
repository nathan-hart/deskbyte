<template>
  <div class="home">
    <!-- <Byte msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <div class="menu">
      <h3>Deskinspiration</h3>
      <h3>Remote News</h3>
      <h3>Virtual Coffee</h3>
      <h3>Profile</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  // grid-template-columns: auto auto auto;
}
</style>
