<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div id="top-section">
      <div id="ts-circle" class="wow fadeIn">
        <div id="ts-image" class="wow fadeIn" data-wow-delay="0.5s"></div>
        <div id="ts-circle-text">TRU FIT</div>
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
  height: 300vh;
}

#top-section {
  height: 100vh;
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

  #ts-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    padding: 30px 40px;
    background-image: url("../assets/fitness-girl-cropped-update-2.png");
    background-size: auto 90%;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
