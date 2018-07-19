<template>
    <li @click="changeStyle">
      <router-link  class="li-box" :to="{path:'/',query:{'id':item.id,'singer':item.artists[0].name,'song':item.name,'picUrl':item.album.picUrl}}">
        <div class="list_img">
            <img v-lazy="item.album.picUrl" alt="">
        </div>
        <div class="list_info">
            <div class="left">
                <h3>{{item.name}}</h3>
                <p>{{item.artists[0].name}} - {{item.album.name}}</p>
            </div>
            <div class="right">
                <i class="iconfont icon-bofangshu"></i>
                <i class="iconfont icon-gengduoxiao"></i>
            </div>
        </div>
        </router-link>
    </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "dailyListInfo",
  props: ["item"],
  methods: {
    ...mapActions(["changeStyle"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";
.li-box {
  width: 100%;
  height: 0.46rem;
  padding-left: 0.06rem;
  display: -webkit-flex;
  align-items: center;
  .list_img {
    float: left;
    width: 0.35rem;
    height: 0.35rem;
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
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        @include sc(0.09rem, $fc03);
      }
      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
</style>
