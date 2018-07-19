<template>
  <div id="app">
    <router-view class="content"/>
    <play class="foot-box" :style="'height:' + this.$store.state.playBoxHeight"></play>
  </div>
</template>
<script>
// import CommonFooter from "./components/common/CommonFooter";
import play from "./pages/play";
export default {
  name: "App",
  components: {
    play
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  height: 100%;
  /* background: #e24439; */
  /* display: flex; */
  /* flex-direction: column; */
}
.content {
  /* flex: 1; */
  /* overflow-y: auto; */
}
.foot-box {
  width: 100%;
  /* height: 100%; */
  position: fixed;
  bottom: 0;
}
</style>
