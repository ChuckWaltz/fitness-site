<template>
  <div id="home" class="scrollSection1">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div id="carousel-buttons">
      <div class="carouselButton carouselButtonActive"></div>
      <div class="carouselButton"></div>
      <div class="carouselButton"></div>
    </div>
    <div id="top-section">
      <div id="ts-circle" class="wow fadeIn">
        <div id="ts-image" class="wow fadeIn" data-wow-delay="0.5s"></div>
        <div id="ts-circle-text">TRU FIT</div>
      </div>
      <div id="ts-content-container" class="wow fadeIn" data-wow-delay="1s">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, id
          ab.
        </p>
        <div id="ts-content-button">
          <h3 class="wow slideInLeft" data-wow-delay="2s">
            Explore
            <font-awesome-icon icon="caret-right" />
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      scrollCount: 0,
      scrollDirection: "down",
      canAddScroll: true,
      currentScrollSection: 1,
      scrollSectionsCount: 3
    };
  },
  components: {
    //HelloWorld
  },
  mounted() {
    window.addEventListener("wheel", event => {
      if (this.canAddScroll === false) return;
      this.canAddScroll = false;
      const delta = Math.sign(event.deltaY);
      const latestDirection = delta === 1 ? "down" : "up";
      if (latestDirection !== this.scrollDirection) {
        this.scrollDirection = latestDirection;
        this.scrollCount = 1;
      } else {
        this.scrollCount += 1;
        if (this.scrollCount >= 3) {
          this.scrollPage();
          return;
        }
      }

      setTimeout(() => {
        this.canAddScroll = true;
      }, 100);

      window.console.log(this.scrollDirection, this.scrollCount);
    });
  },
  methods: {
    scrollPage() {
      window.console.log("Go!");
      if (this.scrollDirection === "up" && this.currentScrollSection === 1) {
        this.canAddScroll = true;
        this.scrollCount = 0;
        return;
      } else if (
        this.scrollDirection === "down" &&
        this.currentScrollSection === this.scrollSectionsCount
      ) {
        this.canAddScroll = true;
        this.scrollCount = 0;
        return;
      }
      this.canAddScroll = false;
      this.scrollCount = 0;
      document
        .getElementById("home")
        .classList.remove(`scrollSection${this.currentScrollSection}`);
      if (this.scrollDirection === "down") {
        this.currentScrollSection++;
      } else {
        this.currentScrollSection--;
      }
      document
        .getElementById("home")
        .classList.add(`scrollSection${this.currentScrollSection}`);

      setTimeout(() => {
        this.canAddScroll = true;
        this.scrollCount = 0;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  position: absolute;
}

#carousel-buttons {
  display: none;
  position: fixed;
  top: calc(50% - 15px);
  left: 0;
  margin-left: 35px;
  z-index: 100;
  .carouselButton {
    margin-bottom: 15px;
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
  }

  .carouselButtonActive {
    background-color: #42b983;
  }
}

#top-section {
  height: 100vh;
  min-height: 400px;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background: radial-gradient(circle at center, rgb(58, 58, 58), black 40%);

  #ts-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 5vh solid #42b983;
    width: 70vh;
    height: 70vh;

    #ts-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      height: 100vh;
      padding: 30px 40px;
      background-image: url("../assets/fitness-girl-cropped-update.png");
      background-size: auto 90%;
      background-repeat: no-repeat;
      background-position: center;
    }

    #ts-circle-text {
      text-align: center;
      color: white;
      font-family: "Exo", sans-serif;
      letter-spacing: 12px;
      font-size: 20vmin;
      font-weight: 700;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
    }
  }

  #ts-content-container {
    position: absolute;
    bottom: 10vh;
    left: 8vw;
    font-size: calc(18px + 1vmin);
    width: 600px;
    max-width: 80vw;
    text-align: left;
    color: white;

    #ts-content-button {
      cursor: pointer;
      h3 {
        margin-top: 10px;
        color: white;
      }
      svg {
        color: #42b983;
        margin-bottom: -3px;
        margin-left: 5px;
      }

      &:hover {
        svg {
          transition: 0.1s linear all;
          margin-left: 10px;
        }
      }
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  #carousel-buttons {
    display: block;
  }
}
</style>
