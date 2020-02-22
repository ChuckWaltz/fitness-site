<template>
  <div id="nav" class="anim animSlideInRight faster">
    <div id="logo-container" class="anim animFadeIn">
      <img src="@/assets/dumbbell.svg" v-on:click="goToSection(1)" />
    </div>
    <div id="nav-menu-button">
      <img src="@/assets/menu_bars.svg" />
    </div>
    <ul id="nav-list" class="anim animFadeInDown delay-2s">
      <li v-on:click="goToSection(2)" v-bind:class="{ activeLink: activeSection === 2 }">ABOUT</li>
      <li v-on:click="goToSection(3)" v-bind:class="{ activeLink: activeSection === 3 }">SERVICES</li>
      <li v-on:click="goToSection(4)" v-bind:class="{ activeLink: activeSection === 4 }">INSTRUCTORS</li>
      <li v-on:click="goToSection(5)" v-bind:class="{ activeLink: activeSection === 5 }">CONTACT</li>
    </ul>
    <div id="nav-social-links">
      <div class="socialLine anim animFadeIn slow"></div>
      <font-awesome-icon
        :icon="['fab', 'facebook-square']"
        id="social-link-facebook"
        class="anim animFadeIn socialLink"
      />
      <br />
      <font-awesome-icon
        :icon="['fab', 'twitter']"
        id="social-link-twitter"
        class="anim animFadeIn socialLink"
      />
      <br />
      <font-awesome-icon
        :icon="['fab', 'instagram']"
        id="social-link-instagram"
        class="anim animFadeIn socialLink"
      />
      <div class="socialLine anim animFadeIn slow"></div>
    </div>
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>-->
  </div>
</template>

<script>
export default {
  name: "Nav,",
  props: ["activeSection"],
  methods: {
    goToSection(section) {
      this.$root.$emit("goToSection", section);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  position: fixed;
  background-color: #111111;
  z-index: 100;
  height: 50px;
  width: 100vw;
  top: 0;
  animation-delay: 1.5s;

  #logo-container {
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px;
    height: 100%;
    animation-delay: 2s;

    img {
      height: 100%;
      cursor: pointer;
    }
  }

  #nav-menu-button {
    background-color: #42b983;
    width: 60px;
    height: 100%;
    float: right;
    padding: 12px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  #nav-list {
    display: none;
    list-style: none;
    letter-spacing: 2px;
    font-size: 18px;
    color: rgb(160, 160, 160);
    background-color: rgba(0, 0, 0, 0.5);
    border-left: 10px solid #42b983;
  }

  .activeLink {
    color: #42b983;
    font-weight: bold;
  }

  #nav-social-links {
    display: none;

    .socialLink {
      cursor: pointer;
      transition: 0.1s all linear;
      &:hover {
        color: #42b983;
        transform: scale(1.25);
      }
    }

    .socialLine {
      border-left: 1px solid white;
      height: 40px;
      transform: translateX(50%);
      margin-top: 2vh;
      margin-bottom: 2vh;
      animation-delay: 2s;
    }

    #social-link-facebook {
      animation-delay: 2s;
    }
    #social-link-twitter {
      animation-delay: 2.25s;
    }
    #social-link-instagram {
      animation-delay: 2.5s;
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  #nav {
    right: 0;
    height: 100vh;
    width: 60px;

    #logo-container {
      position: absolute;
      left: calc(-100vw + 100%);
      top: 0;
      padding: 0;
      height: 50px;
      padding: 10px;

      img {
        height: 100%;
      }
    }

    #nav-menu-button {
      background-color: #42b983;
      width: 60px;
      height: 50px;
    }

    #nav-list {
      position: absolute;
      right: 100%;
      display: flex;
      height: 50px;
      align-items: center;
      padding-left: 40px;
      li {
        margin-right: 25px;

        &:hover {
          cursor: pointer;
          color: #42b983;
        }
      }
    }

    #nav-social-links {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      svg {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 26px;
      }
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  #nav {
    width: 70px;

    #logo-container {
      height: 60px;
    }

    #nav-list {
      height: 60px;
      font-size: 20px;
      li {
        margin-right: 35px;
      }
    }
    #nav-menu-button {
      width: 70px;
      height: 60px;
      padding: 15px;
    }
  }
}
</style>
