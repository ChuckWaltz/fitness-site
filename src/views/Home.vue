<template>
  <div id="home" class="scrollSection1">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div id="carousel-buttons" class="anim animFadeInLeft delay-2s">
      <div
        class="carouselButton"
        v-bind:class="{ carouselButtonActive: currentScrollSection === 1 }"
      ></div>
      <div
        class="carouselButton"
        v-bind:class="{ carouselButtonActive: currentScrollSection === 2 }"
      ></div>
      <div
        class="carouselButton"
        v-bind:class="{ carouselButtonActive: currentScrollSection === 3 }"
      ></div>
    </div>
    <div id="top-section" class="scrollSection ss1">
      <div id="ts-circle" class="animSection animFadeIn">
        <div id="ts-image" class="animSection animFadeIn"></div>
        <div id="ts-circle-text" class="animSection animFadeIn">
          TRU FIT
        </div>
      </div>
      <div id="ts-content-container">
        <p class="animSection animFadeIn delay-2s">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, id
          ab.
        </p>
        <div id="ts-content-button" class="animSection animFadeInLeft">
          <h3>
            Explore
            <font-awesome-icon icon="caret-right" />
          </h3>
        </div>
      </div>
    </div>
    <div id="about-section" class="scrollSection ss2">
      <div class="sectionText animSection animFadeIn">ABOUT</div>
    </div>
    <div id="services-section" class="scrollSection ss3">
      <div class="sectionText">SERVICES</div>
    </div>
    <div id="instructors-section" class="scrollSection ss4">
      <div>INSTRUCTORS</div>
    </div>
    <div id="contact-section" class="scrollSection ss5">
      <div>CONTACT</div>
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
      // -- Scrolling Variables
      scrollCount: 0,
      scrollDirection: "down",
      canAddScrollCount: true,
      currentScrollSection: 1,
      scrollSectionsCount: 3,
      touchStart: null
      // -- End Scrolling Variables
    };
  },
  components: {
    //HelloWorld
  },
  mounted() {
    // Handle default scrolling
    window.addEventListener("wheel", event => {
      if (this.canAddScrollCount === false) return;
      this.canAddScrollCount = false;
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
        this.canAddScrollCount = true;
      }, 100);
    });

    // Handle mobile touch scrolling
    window.addEventListener("touchstart", event => {
      this.touchStart = event.touches[0].clientY;
    });
    window.addEventListener("touchmove", event => {
      if (this.canAddScrollCount === false) return;
      this.canAddScrollCount = false;
      var touchCurrent = event.touches[0].clientY;
      const latestDirection = this.touchStart > touchCurrent ? "down" : "up";
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
        this.canAddScrollCount = true;
      }, 50);
    });

    // Init first section animations
    this.animateSection(this.currentScrollSection);
  },
  methods: {
    scrollPage() {
      if (this.scrollDirection === "up" && this.currentScrollSection === 1) {
        this.canAddScrollCount = true;
        this.scrollCount = 0;
        return;
      } else if (
        this.scrollDirection === "down" &&
        this.currentScrollSection === this.scrollSectionsCount
      ) {
        this.canAddScrollCount = true;
        this.scrollCount = 0;
        return;
      }
      this.canAddScrollCount = false;
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

      document.getElementById("home").style.bottom = `${this
        .currentScrollSection - 1}00vh`;

      this.animateSection(this.currentScrollSection);

      setTimeout(() => {
        this.canAddScrollCount = true;
        this.scrollCount = 0;
      }, 1000);
    },

    animateSection(scrollSection) {
      const elements = document.querySelectorAll(
        `.ss${scrollSection} .animSection`
      );
      elements.forEach(el => {
        const classList = [...el.classList];
        let replaceClass = classList.find(
          c => c.includes("anim") && c !== "animSection"
        );
        if (replaceClass) {
          replaceClass = replaceClass.replace("anim", "");
          replaceClass =
            replaceClass.charAt(0).toLowerCase() + replaceClass.slice(1);
        }
        window.console.log(replaceClass);
        el.classList.add("animated", replaceClass);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100vh;
  position: fixed;
  bottom: 0;

  transition: bottom 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  .scrollSection {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
    .sectionText {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform-origin: center center;
      color: black;
      font-size: 32px;
    }
  }
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
    background-color: rgb(160, 160, 160);
    cursor: pointer;
  }

  .carouselButtonActive {
    background-color: #42b983;
  }
}

#top-section {
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
    animation-delay: 0s;

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
      animation-delay: 0.75s;
    }

    #ts-circle-text {
      text-align: center;
      color: white;
      font-family: "Exo", sans-serif;
      letter-spacing: 12px;
      font-size: 20vmin;
      font-weight: bold;
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
      animation-delay: 2s;

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

#about-section {
  background-color: white;
  position: relative;
}

#services-section {
  background-color: black;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  #carousel-buttons {
    display: block;
  }
}
</style>
