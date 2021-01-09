<template>
  <div id="nav">
    <img alt="logo" src="../src/assets/logo.png" id="logo" />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fffce8;
  height: 100vh;
  margin: 0px;
}

#logo {
  height: 1rem;
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
