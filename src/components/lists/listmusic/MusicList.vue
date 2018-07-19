<template>
  <div>
    <div class="musicLi"  :key="index"   v-for="(m,index) in oList.tracks"  @click="changeStyle(index)">
      <router-link  class="musicLi" :to="{path:'/'}">
      <div class="music-left">{{index+1}}</div>
      <div class="music-right">
        <div class="music-right-left">
          <p class="music-name">{{m.name}}</p>
          <p class="music-author">{{m.artists[0].name}}</p>
        </div>
        <div class="right-icon"><i class="iconfont icon-zhongxinshipin"></i><i class="iconfont icon-gengduoxiao"></i></div>
      </div>
      </router-link>
    </div>



    <!--<div class="musicLi"   v-for="(s,index) in sList.hotSongs">-->
      <!--<div class="music-left">{{index+1}}</div>-->
      <!--<div class="music-right">-->
        <!--<div class="music-right-left">-->
          <!--<a class="music-name">{{s.name}}</a>-->
          <!--<a class="music-author"><span class="addName" v-for="n in s.ar">{{n.name}}</span></a>-->
        <!--</div>-->
        <!--<div class="right-icon"><i class="iconfont icon-zhongxinshipin"></i><i class="iconfont icon-gengduoxiao"></i></div>-->
      <!--</div>-->
    <!--</div>-->
  </div>

</template>

<script>
// 导入音乐列表的部分
import { mapActions } from "vuex";
export default {
  props: ["oList"],
  methods: {
    ...mapActions(["changeStyle"])
  }
};
</script>

<style lang="scss" scoped>
.musicLi {
  width: 100%;
  height: 0.53rem;
  display: -webkit-flex;
  background: #fbfcfe;
  .music-left {
    width: 15%;
    line-height: 0.53rem;
    text-align: center;
    font-size: 0.14rem;
    color: #969897;
  }
  .music-right {
    width: 85%;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    border-bottom: 2px solid #eff0f2;
    .music-right-left {
      width: 60%;
      .music-name {
        font-size: 0.16rem;
        color: #323335;
        line-height: 0.23rem;
        padding-top: 0.08rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .music-author {
        font-size: 0.14rem;
        color: #969897;
        line-height: 0.18rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .right-icon {
      width: 30%;
      display: -webkit-flex;
      -webkit-justify-content: space-around;
      -webkit-align-items: center;
      .icon-zhongxinshipin {
        font-size: 0.25rem;
        color:#969897;
      }
      .icon-gengduoxiao {
        font-size: 0.25rem;
        color:#969897;
      }
    }
  }
}
</style>
