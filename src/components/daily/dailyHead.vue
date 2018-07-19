<template>
  <div class="p_header">
    <section class="p_header_con">
      <div class="p_header_el">
        <router-link :to="{path:'/tuijian'}">
        <i class="iconfont icon-xitongfanhui"></i>
        <span class="p_header_title">每日推荐</span>
        </router-link>
      </div>
      <i class="iconfont icon-question"></i>
    </section>
  </div>
</template>

<script>
export default {
  name: "dailyHead"
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";
.p_header {
  width: 100%;
  height: 0.42rem;
  background-color: #e04438;
  .p_header_con {
    height: 100%;
    margin: 0 0.15rem;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    .p_header_el {
      font-size: 0;
      .icon-xitongfanhui {
        display: inline-block;
        @include sc(0.15rem, $fc01);
        margin-right: 0.16rem;
      }
      .p_header_title {
        @include sc(0.12rem, $fc01);
      }
    }
    .icon-question {
      display: inline-block;
      @include sc(0.15rem, $fc01);
    }
  }
}
</style>
