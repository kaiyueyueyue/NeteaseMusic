<template>
    <ul class="p_list">
        <div class="list_title">
            <p class="left"><i class="iconfont icon-bofang"></i>播放全部</p>
            <p class="right"><i class="iconfont icon-caidan1"></i>多选</p>
        </div>
        <daily-list-info v-for="(item,index) in listData" :key="index" :item="item"></daily-list-info>
    </ul>
</template>

<script>
import dailyListInfo from "./dailyListInfo.vue";

export default {
  name: "dailyList",
  props: ["listData"],

  components: {
    dailyListInfo
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";
.p_list {
  background-color: $fc01;
  .list_title {
    height: 0.41rem;
    align-items: center;
    @include fj;
    @include sc(0.1rem, #323232);
    border-bottom: 2px solid #eff0f2;
    .icon-bofang,
    .icon-caidan1 {
      @include sc(0.17rem, #4c4c4c);
      padding-right: 0.13rem;
      vertical-align: middle;
    }
    .left {
      margin-left: 0.13rem;
    }
    .right {
      margin-right: 0.09rem;
    }
  }
  li {
    height: 0.46rem;
    padding-left: 0.06rem;
    display: -webkit-flex;
    align-items: center;
    .list_img {
      float: left;
      width: 0.3rem;
      height: 0.3rem;
      padding-right: 0.06rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
    }
    .list_info {
      height: 100%;
      flex: 1;
      @include fj;
      align-items: center;
      border-bottom: 2px solid #eff0f2;
      .left {
        h3 {
          line-height: 0.16rem;
          font-weight: normal;
          @include sc(0.1rem, $fc03);
        }
        p {
          line-height: 0.14rem;
          @include sc(0.07rem, #818181);
        }
      }
      .right {
        font-size: 0;
        .icon-bofangshu,
        .icon-gengduoxiao {
          @include sc(0.14rem, #b0b1b3);
          padding-right: 0.2rem;
        }
      }
    }
  }
}
</style>
