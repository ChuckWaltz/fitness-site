<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div id="top-section">
      <div id="ts-circle">
        <div id="ts-circle-text">TRU FIT</div>
      </div>
      <div id="ts-image"></div>
      <div id="logo-container">
        <img src="@/assets/dumbbell.svg" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    //HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.home {
}

#top-section {
  height: 100vh;
  background: radial-gradient(circle at center, rgb(27, 27, 27), black 40%);

  #ts-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 30px solid #42b983;
    width: 55vh;
    height: 55vh;

    #ts-circle-text {
      color: white;
      letter-spacing: 40px;
      font-size: 20vw;
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
    }
  }

  #ts-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 30px 40px;
    background-image: url("../assets/fitness-girl-cropped-update-2.png");
    background-size: auto 90%;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  #logo-container {
    float: left;
    width: calc(100px + 1.5vw);
    margin-left: 40px;
    margin-top: 30px;

    img {
      width: 100%;
    }
  }
}
</style>
