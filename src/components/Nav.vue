<template>
  <div id="nav" class="anim animSlideInRight faster navClosed">
    <div id="logo-container" class="anim animFadeIn">
      <img src="@/assets/dumbbell.svg" v-on:click="goToSection(1)" />
    </div>
    <div id="nav-menu-button" v-on:click="toggleNav()">
      <img src="@/assets/menu_bars.svg" v-if="navClosed && isMobile" />
      <font-awesome-icon icon="times" v-if="!navClosed && isMobile" />
      <img src="@/assets/tf_logo_black.png" v-if="!isMobile" />
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
  name: "Navbar",
  props: ["activeSection"],
  data() {
    return {
      isMobile: false,
      navClosed: true
    };
  },
  mounted() {
    window.onresize = () => {
      if (window.innerWidth >= 576) {
        this.isMobile = false;
        this.navClosed = false;
      } else {
        this.isMobile = true;
        this.navClosed = true;
      }

      let navElement = document.getElementById("nav");
      if (this.navClosed) navElement.classList.add("navClosed");
      else navElement.classList.remove("navClosed");
    };
    window.onresize();
  },
  methods: {
    goToSection(section) {
      this.navClosed = true;
      this.$root.$emit("goToSection", section);
    },
    toggleNav() {
      if (this.isMobile) {
        this.navClosed = !this.navClosed;
      } else {
        this.navClosed = false;
        this.goToSection(1);
        return;
      }
      let navElement = document.getElementById("nav");
      if (this.navClosed) navElement.classList.add("navClosed");
      else navElement.classList.remove("navClosed");
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
    position: relative;
    background-color: #42b983;
    width: 60px;
    height: 100%;
    float: right;
    padding: 12px;
    cursor: pointer;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: black;
      font-size: 32px;
    }
  }

  #nav-list {
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

@media (max-width: 575px) {
  #nav-menu-button {
    cursor: pointer;
  }

  #nav-list {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 15px;
    list-style: none;
    letter-spacing: 2px;
    font-size: 18px;
    background-color: #111111 !important;
    border-left: 10px solid #42b983;
    z-index: -100;
    transition: all 0.15s linear;

    li {
      padding-top: 15px;
    }
  }
  .navClosed {
    #nav-list {
      left: 100%;
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
