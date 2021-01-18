<template>
  <div class="header">
    <div class="logo">
      <img alt="logo" src="../assets/logo.png" id="logo" />
    </div>
    <div class="auth">
      <h3>Login</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $db-navy;
  height: 6vh;
  padding: 0.7rem 2rem 0.7rem 2rem;
}
.logo {
  margin-top: -0.2rem;
  #logo {
    height: 3.8rem;
  }
}

.auth {
  margin-right: 2rem;
}

// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
</style>
