<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import WOW from "wow.js";
import "./assets/js/animate.css";
export default {
  components: {
    Nav
  },

  mounted() {
    new WOW().init();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Exo:400,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wow {
  visibility: hidden;
}
#app {
  font-family: "Exo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  background-color: black;
}
</style>
