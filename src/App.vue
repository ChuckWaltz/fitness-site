<template>
  <div id="app">
    <div id="nav" class="wow slideInRight">
      <div id="logo-container" class="wow fadeIn" data-wow-delay="1s">
        <img src="@/assets/dumbbell.svg" />
      </div>
      <div id="nav-menu-button"></div>
      <ul id="nav-list">
        <li class="wow fadeInDown" data-wow-delay="1s">ABOUT</li>
        <li class="wow fadeInDown" data-wow-delay="1.25s">SERVICES</li>
        <li class="wow fadeInDown" data-wow-delay="1.5s">INSTRUCTORS</li>
        <li class="wow fadeInDown" data-wow-delay="1.75s">CONTACT</li>
      </ul>
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
  </div>
</template>

<script>
import WOW from "wow.js";
import "./assets/js/animate.css";
export default {
  mounted() {
    new WOW().init();
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Exo:700&display=swap");
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
}

#nav {
  position: fixed;
  background-color: #111111;
  z-index: 100;
  /* right: 0;
  height: 100vh; */
  height: 50px;
  width: 100vw;
  top: 0;

  #logo-container {
    position: absolute;
    padding: 12px;
    height: 100%;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  #nav-menu-button {
    background-color: #42b983;
    width: 60px;
    height: 100%;
    float: right;
  }

  #nav-list {
    display: none;
    letter-spacing: 2px;
    font-size: 18px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  #nav {
    position: fixed;
    right: 0;
    height: 100vh;
    width: 60px;

    #logo-container {
      position: fixed;
      left: 0;
      top: 0;
      padding: 12px;
      height: 60px;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    #nav-menu-button {
      background-color: #42b983;
      width: 60px;
      height: 50px;
      float: right;
    }

    #nav-list {
      color: white;
      position: absolute;
      transform: translate(-100%);
      display: flex;
      height: 50px;
      list-style: none;
      align-items: center;
      li {
        margin-right: 25px;

        &:hover {
          cursor: pointer;
          color: #42b983;
        }
      }
    }

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
