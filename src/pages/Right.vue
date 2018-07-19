<template>
  <div class="bBox">
      <video-header></video-header>
      <video-list></video-list>
  </div>

</template>

<script>
// 引入头部导航组件
import VideoHeader from "../components/video/VideoHeader";
// 引入视频列表组件
import VideoList from "../components/video/VideoList";
export default {
  components: {
    VideoHeader,
    VideoList
  }
};
</script>

<style lang="scss" scoped>
</style>
