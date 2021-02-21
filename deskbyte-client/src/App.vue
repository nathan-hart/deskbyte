<template>
  <div>
    <Header class="header" />
    <div class="menu-and-view">
      <div class="menu">
        <router-link to="/">
          <h3>Deskspiration</h3>
        </router-link>
        <router-link to="/remote-news">
          <h3>Remote News</h3>
        </router-link>
        <router-link to="/virtual-coffee">
          <h3>Virtual Coffee</h3>
        </router-link>
        <router-link to="/byte">
          <h3>Profile</h3>
        </router-link>
      </div>
      <div class="router-view">
        <router-view />
      </div>
      <div class="empty-column"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from './components/Header.vue' // @ is an alias to /src

  export default defineComponent({
    name: 'App',
    components: {
      Header,
    },
  })
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .menu-and-view {
    display: grid;
    grid-template: 
      'header header header header header header header header header header header header'
      'menu menu view view view view view view view view column column';
    // grid-gap: 0.7rem;
  }

  .menu {
    grid-area: menu;
    // padding: 1rem;
    min-width: 15rem;
  }

  .empty-column {
    grid-area: column;
    min-width: 15rem;
  }

  .router-view {
    grid-area: view;
    display: flex;
    flex-direction: row;
    justify-content: center;
    // margin: 1rem 1rem 1rem 1rem;
    border: 1px dotted blue;
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
