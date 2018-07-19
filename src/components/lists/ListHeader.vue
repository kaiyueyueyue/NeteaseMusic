<template>
    <div class="head">
      <div class="head-left" @click="goBack"><a class="aLeft"><i class="iconfont icon-xitongfanhui"></i></a></div>
      <div class="head-center">
        <p>
          <span class="head-title">歌单</span>
          <span class="head-word" v-if="oList.tracks">根据你喜欢的《{{oList.tracks[0].name}}》推荐</span>
        </p>
        <p class="head-search"><i class="iconfont icon-iconfontzhizuobiaozhun22
"></i></p>
      </div>
      <div class="head-right"><i class="iconfont icon-gengduoxiao"></i></div>
    </div>



</template>

<script>
export default {
  props: ["oList"],
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.head {
  width: 100%;
  height: 0.58rem;
  display: -webkit-flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  .head-left {
    width: 15%;
    .aLeft {
      height: 0.58rem;
      color: #fffffd;
      display: -webkit-flex;
      -webkit-justify-content: center;
      -webkit-align-items: center;
      .icon-xitongfanhui {
        font-size: 0.22rem;
      }
    }
  }
  .head-center {
    width: 70%;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    .head-title {
      display: block;
      font-weight: 600;
      font-size: 0.16rem;
      color: #fffffd;
      line-height: 0.2rem;
      padding-top: 0.13rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .head-word {
      width: 80%;
      display: block;
      font-size: 0.12rem;
      line-height: 0.14rem;
      padding-bottom: 0.11rem;
      color: #d7d4cd;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .head-search {
      font-size: 0.22rem;
      color: #fffffd;
      line-height: 0.58rem;
      .icon-iconfontzhizuobiaozhun22 {
        font-size: 0.2rem;
      }
    }
  }
  .head-right {
    width: 15%;
    color: #fffffd;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
    .icon-gengduoxiao {
      font-size: 0.2rem;
    }
  }
}
</style>
