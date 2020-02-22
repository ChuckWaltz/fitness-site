<template>
  <div id="home" class="scrollSection1">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div id="carousel-buttons" class="anim animFadeInLeft delay-2s">
      <div
        class="carouselButton"
        v-bind:class="{ carouselButtonActive: currentScrollSection === 1 }"
        v-on:click="goToSection(1)"
      ></div>
      <div
        class="carouselButton"
        v-bind:class="{ carouselButtonActive: currentScrollSection === 2 }"
        v-on:click="goToSection(2)"
      ></div>
      <div
        class="carouselButton"
        v-bind:class="{ carouselButtonActive: currentScrollSection === 3 }"
        v-on:click="goToSection(3)"
      ></div>
      <div
        class="carouselButton"
        v-bind:class="{ carouselButtonActive: currentScrollSection === 4 }"
        v-on:click="goToSection(4)"
      ></div>
      <div
        class="carouselButton"
        v-bind:class="{ carouselButtonActive: currentScrollSection === 5 }"
        v-on:click="goToSection(5)"
      ></div>
    </div>
    <div id="top-section" class="scrollSection ss1">
      <div id="ts-circle" class="animSection animFadeIn">
        <div id="ts-image" class="animSection animFadeIn"></div>
        <div id="ts-circle-text" class="animSection animFadeIn">TRU FIT</div>
      </div>
      <div id="ts-content-container">
        <p class="animSection animFadeIn delay-2s">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, id
          ab.
        </p>
        <div id="ts-content-button" class="animSection animFadeInLeft" v-on:click="goToSection(2)">
          <h3>
            Explore
            <font-awesome-icon icon="caret-right" />
          </h3>
        </div>
      </div>
    </div>
    <div id="about-section" class="scrollSection ss2">
      <img id="dots-bg-1" class="dots-bg wow fadeIn" src="@/assets/dots_bg1.svg" />
      <img id="dots-bg-2" class="dots-bg wow fadeIn" src="@/assets/dots_bg2.svg" />
      <img id="dots-bg-3" class="dots-bg wow fadeIn" src="@/assets/dots_bg3.svg" />
      <img id="dots-bg-4" class="dots-bg wow fadeIn" src="@/assets/dots_bg1.svg" />
      <img id="dots-bg-5" class="dots-bg wow fadeIn" src="@/assets/dots_bg2.svg" />
      <img id="dots-bg-6" class="dots-bg wow fadeIn" src="@/assets/dots_bg3.svg" />
      <img id="dots-bg-7" class="dots-bg wow fadeIn" src="@/assets/dots_bg1.svg" />
      <img id="dots-bg-8" class="dots-bg wow fadeIn" src="@/assets/dots_bg2.svg" />
      <img id="dots-bg-9" class="dots-bg wow fadeIn" src="@/assets/dots_bg3.svg" />
      <div id="as-design" class="animSection animSlideInRight"></div>
      <div id="as-content">
        <div id="as-content-inner">
          <h2>OUR FOCUS IS ON YOU</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nobis
            incidunt exercitationem, ipsa ratione aperiam eos, excepturi quisquam
            delectus expedita rem placeat totam illum libero. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Consequatur, voluptate.
          </p>
        </div>
      </div>

      <div id="as-design-2" class="animSection animSlideInRight"></div>

      <img id="as-runner-img" class="animSection animFadeInLeft" src="@/assets/runner.png" />
    </div>
    <div id="services-section" class="scrollSection ss3">
      <div id="ss-item-1" class="ssItem animSection animSlideInLeft">
        <div class="ssItemOverlay">
          <h3>Full-Service Gym</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, architecto. Atque odio ipsam quis laudantium accusantium officiis non quae doloribus.</p>
        </div>
      </div>
      <div id="ss-item-2" class="ssItem animSection animSlideInLeft">
        <div class="ssItemOverlay">
          <h3>Personal Training</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nostrum et hic id a perferendis.</p>
        </div>
      </div>
      <div id="ss-item-3" class="ssItem animSection animSlideInRight">
        <div class="ssItemOverlay">
          <h3>Cross-Fit Courses</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam dignissimos aliquid amet cupiditate tenetur animi nostrum aspernatur.</p>
        </div>
      </div>
      <div id="ss-item-4" class="ssItem animSection animSlideInRight">
        <div class="ssItemOverlay">
          <h3>Alternative Regimens</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse aspernatur eaque optio, libero doloremque laborum!</p>
        </div>
      </div>
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
      scrollSectionsCount: 5,
      touchStart: null
      // -- End Scrolling Variables
    };
  },
  components: {
    //HelloWorld
  },
  mounted() {
    // Listen for goToSection event
    this.$root.$on("goToSection", section => {
      this.goToSection(section);
    });

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
      this.$parent.activeSection = this.currentScrollSection;

      setTimeout(() => {
        this.canAddScrollCount = true;
        this.scrollCount = 0;
      }, 1000);
    },

    goToSection(section) {
      this.currentScrollSection = section;
      document
        .getElementById("home")
        .classList.add(`scrollSection${this.currentScrollSection}`);

      document.getElementById("home").style.bottom = `${this
        .currentScrollSection - 1}00vh`;

      this.animateSection(this.currentScrollSection);
      this.$parent.activeSection = this.currentScrollSection;

      this.canAddScrollCount = true;
      this.scrollCount = 0;
    },

    animateSection(scrollSection) {
      const elements = document.querySelectorAll(
        `.ss${scrollSection} .animSection`
      );
      elements.forEach(el => {
        const classList = [...el.classList];
        let replaceClass = classList.find(
          c => c.includes("anim") && c !== "animSection" && c !== "animated"
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

<style lang="scss" scoped>
#home {
  height: 100vh;
  position: fixed;
  bottom: 0;

  transition: bottom 0.75s cubic-bezier(0.075, 0.82, 0.165, 1);

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
  z-index: 1000;

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
    border: 5vmin solid #42b983;
    width: 80vmin;
    height: 80vmin;
    animation-delay: 0s;

    #ts-image {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200%;
      height: 200%;
      padding: 30px 40px;
      background-image: url("../assets/fitness-girl-cropped-update.png");
      background-size: auto 80%;
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
  //background-image: url("../assets/man-and-woman-workout.jpg");
  background-size: cover;
  background-position: right;

  .dots-bg {
    display: none;
    position: absolute;
    top: 0;
    height: 100vw;
    width: auto;
    animation-timing-function: linear;
  }

  #dots-bg-1 {
    left: 100%;
    animation-name: bgMove1;
    animation-duration: 120s;
  }

  #dots-bg-2 {
    left: 100%;
    animation-name: bgMove1;
    animation-duration: 90s;
  }

  #dots-bg-3 {
    left: 100%;
    animation-name: bgMove1;
    animation-duration: 60s;
  }

  #dots-bg-4 {
    animation-name: bgMove2;
    animation-duration: 240s;
    animation-iteration-count: infinite;
  }

  #dots-bg-5 {
    animation-name: bgMove2;
    animation-duration: 180s;
    animation-iteration-count: infinite;
  }

  #dots-bg-6 {
    animation-name: bgMove2;
    animation-duration: 120s;
    animation-iteration-count: infinite;
  }

  #dots-bg-7 {
    animation-name: bgMove3;
    animation-duration: 480s;
    animation-iteration-count: infinite;
  }

  #dots-bg-8 {
    animation-name: bgMove3;
    animation-duration: 360s;
    animation-iteration-count: infinite;
  }

  #dots-bg-9 {
    animation-name: bgMove3;
    animation-duration: 240s;
    animation-iteration-count: infinite;
  }

  @keyframes bgMove1 {
    0% {
      left: 0;
    }
    90% {
      opacity: 1;
    }
    100% {
      left: -100%;
      opacity: 0;
    }
  }

  @keyframes bgMove2 {
    0% {
      left: 100%;
    }
    90% {
      opacity: 1;
    }
    100% {
      left: -100%;
      opacity: 0;
    }
  }

  @keyframes bgMove3 {
    0% {
      left: 200%;
    }
    90% {
      opacity: 1;
    }
    100% {
      left: -100%;
      opacity: 0;
    }
  }

  #as-runner-img {
    position: absolute;
    left: 10vw;
    bottom: 0;
    height: 80%;
  }

  #as-content {
    position: absolute;
    bottom: calc(30% - 1px);
    right: 0;
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
    width: 100vw;
    padding: 15px 5vw;
    border-top: 3px solid #42b983;
    border-bottom: 3px solid #42b983;
    z-index: 100;

    #as-content-inner {
      max-width: 1100px;
      margin: auto;
    }

    h2 {
      margin-bottom: 5px;
    }

    p {
      font-size: 16px;
    }
  }

  #as-design {
    position: absolute;
    bottom: calc(30% - 3vh);
    left: 0;
    width: 100%;
    border-top: 3vh solid #42b983;
  }

  #as-design-2 {
    position: absolute;
    top: 29vh;
    right: 0;
    width: 90%;
    border-top: 3vh solid #42b983;
    animation-delay: 0.25s;
    animation-duration: 1.5s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
}

#services-section {
  background-color: black;
  display: flex;
  flex-direction: column;
  padding-top: 50px;

  .ssItem {
    width: 100%;
    height: 25%;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    &:hover {
      .ssItemOverlay {
        opacity: 1 !important;
      }
    }
  }

  .ssItemOverlay {
    opacity: 1;
    padding: 5px 10px;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.25s linear;

    h3 {
      font-size: 20px;
      color: #42b983;
    }
    p {
      font-size: 16px;
    }
  }

  #ss-item-1 {
    background-image: url("../assets/man-sitting-weights-wide.jpg");
    border-bottom: 0.33vh solid #42b983;
  }
  #ss-item-2 {
    background-image: url("../assets/woman-with-trainer-wide.jpg");
    z-index: 100;
    animation-delay: 0.25s;
    border-bottom: 0.33vh solid #42b983;
    border-top: 0.33vh solid #42b983;
  }
  #ss-item-3 {
    background-image: url("../assets/man-jumping-ball-wide.jpg");
    z-index: 100;
    animation-delay: 0.25s;
    border-bottom: 0.33vh solid #42b983;
    border-top: 0.33vh solid #42b983;
  }
  #ss-item-4 {
    background-image: url("../assets/woman-boxing-wide.jpg");
    border-top: 0.33vh solid #42b983;
  }
}

#instructors-section {
  background-position: center;
  background-size: cover;
  background-image: url("../assets/man-and-woman-workout.jpg");
}

// Small devices in landscape mode
@media screen and (orientation: landscape) and (max-device-height: 576px) {
  #about-section {
    #as-content {
      bottom: 10%;
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  #about-section {
    #as-runner-img {
      height: 90%;
    }
    #as-content {
      right: 60px;
      width: calc(100% - 60px);

      p {
        font-size: 18px;
      }
    }
  }

  #services-section {
    padding-top: 0;
    padding-right: 60px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  #top-section {
    #ts-circle {
      width: 70vmin;
      height: 70vmin;
    }
  }

  #carousel-buttons {
    display: block;
  }

  #about-section {
    #as-content {
      position: absolute;
      bottom: 30%;
      right: 70px;
      color: black;
      width: calc(100% - 70px);
      padding: 15px 5vw;

      p {
        font-size: 20px;
      }
    }

    .dots-bg {
      display: block;
    }
  }

  #services-section {
    padding-right: 70px;
  }
}

// Landscape orientation
@media (orientation: landscape) {
  #services-section {
    flex-direction: row;

    .ssItem {
      height: 100%;
      width: 25%;
      background-position: center;
      background-size: cover;
    }

    #ss-item-1 {
      background-image: url("../assets/man-sitting-weights-tall.jpg");
      border: none;
      border-right: 0.33vw solid #42b983;
      animation-duration: 0.85s;
    }
    #ss-item-2 {
      background-image: url("../assets/woman-with-trainer-tall.jpg");
      border: none;
      border-left: 0.33vw solid #42b983;
      border-right: 0.33vw solid #42b983;
      animation-duration: 0.85s;
      z-index: 100;
    }
    #ss-item-3 {
      background-image: url("../assets/man-jumping-ball-tall.jpg");
      border: none;
      border-left: 0.33vw solid #42b983;
      border-right: 0.33vw solid #42b983;
      animation-duration: 0.85s;
      z-index: 100;
    }
    #ss-item-4 {
      background-image: url("../assets/woman-boxing-tall.jpg");
      border: none;
      border-left: 0.33vw solid #42b983;
      animation-duration: 0.85s;
    }
  }
}
</style>
