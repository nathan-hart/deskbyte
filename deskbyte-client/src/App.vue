<template>
  <div>
    <Header />
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <div class="router-view">
      <router-view />
      <!-- <div class="test-div">
        <p>test</p>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue"; // @ is an alias to /src

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
}

.router-view {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 1rem 1rem 1rem;
  // border: 1px dotted blue;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
