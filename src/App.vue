<template>
  <div id="app">
    <div id="nav">
      <div id="nav-menu-button"></div>
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  right: 0;

  background-color: #111111;
  height: 100vh;

  #nav-menu-button {
    width: 100%;
    background-color: #42b983;
    width: 80px;
    height: 70px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
