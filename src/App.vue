<template>
  <div id="app">
    <Nav v-bind:active-section="activeSection" />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import "../node_modules/animate.css/animate.min.css";
export default {
  components: {
    Nav
  },
  data() {
    return {
      activeSection: 1
    };
  },
  mounted() {
    this.initializeGlobalAnimations();
  },
  methods: {
    initializeGlobalAnimations() {
      const elements = document.querySelectorAll(`.anim`);
      elements.forEach(el => {
        const classList = [...el.classList];
        let replaceClass = classList.find(
          c => c.includes("anim") && c !== "anim" && c !== "animated"
        );
        if (replaceClass) {
          replaceClass = replaceClass.replace("anim", "");
          replaceClass =
            replaceClass.charAt(0).toLowerCase() + replaceClass.slice(1);
        }
        el.classList.add("animated", replaceClass);
      });
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Exo";
  src: url("assets/fonts/Exo-Regular.ttf") format("truetype");
  font-weight: normal;
}
@font-face {
  font-family: "Exo";
  src: url("assets/fonts/Exo-Bold.ttf") format("truetype");
  font-weight: bold;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  background-color: black;
}
#app {
  font-family: "Exo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;
}
</style>
