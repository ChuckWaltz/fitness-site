<template>
  <div id="nav" class="wow slideInRight">
    <div id="logo-container" class="wow fadeIn" data-wow-delay="1s">
      <img src="@/assets/dumbbell.svg" />
    </div>
    <div id="nav-menu-button">
      <img src="@/assets/menu_bars.svg" />
    </div>
    <ul id="nav-list">
      <li class="wow fadeInDown" data-wow-delay="1s">ABOUT</li>
      <li class="wow fadeInDown" data-wow-delay="1.25s">SERVICES</li>
      <li class="wow fadeInDown" data-wow-delay="1.5s">INSTRUCTORS</li>
      <li class="wow fadeInDown" data-wow-delay="1.75s">CONTACT</li>
    </ul>
    <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  position: fixed;
  background-color: #111111;
  z-index: 100;
  /* right: 0;
  height: 100vh; */
  height: 50px;
  width: calc(100vw - 16px);
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
    padding: 12px;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  #nav-list {
    display: none;
    letter-spacing: 2px;
    font-size: 18px;
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
      padding: 0;
      margin-left: 30px;
      margin-top: 30px;
      height: 72px;

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
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  #nav {
    width: 80px;
    #nav-list {
      height: 70px;
      font-size: 20px;
      li {
        margin-right: 35px;
      }
    }
    #nav-menu-button {
      width: 80px;
      height: 70px;
      padding: 20px;
    }
  }
}
</style>
