<template>
  <div class="bjBox" v-if="oList.creator" v-bind:style="{backgroundImage: 'url(' + oList.creator.backgroundUrl + ')'}">
    <div class="photo">
      <div class="photo-left">
        <div class="left-img">
          <img v-lazy="oList.coverImgUrl
" >
          <p class="img-word"><i class="iconfont icon-headseterji"></i><span class="word" >{{((oList.playCount)/10000).toFixed(1)}}万</span></p>
          <p class="img-foot"><i class="iconfont icon-i-info"></i></p>
        </div>
      </div>
      <div class="photo-right">
        <p class="right-top">{{oList.name}}</p>
        <p class="right-foot">
          <img v-lazy="oList.creator.avatarUrl" class="foot-img">
          <span class="foot-word">{{oList.creator.nickname}}</span>
          <i class="iconfont icon-gengduo"></i>
        </p>
      </div>
    </div>
    <nav-list :oList="oList"></nav-list>
    <top-collect :oList="oList"></top-collect>
  </div>
</template>

<script>
// 导入导航列表组件
import NavList from "./NavList";
// 导入收藏部分组件
import TopCollect from "./TopCollect";
export default {
  props: ["oList"],
  props: {
    oList: {
      default: function() {
        return {
          creator: {}
        };
      }
    }
  },
  components: {
    NavList,
    TopCollect
  }
};
</script>

<style lang="scss"  scoped>
.bjBox {
  background-size: cover;
  background-position: center;
  .mengban {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  .photo {
    padding-top: 0.58rem;
    width: 100%;
    height: 1.6rem;
    display: -webkit-flex;
    .photo-left {
      width: 47%;
      height: 1.6rem;
      display: -webkit-flex;
      -webkit-justify-content: center;
      -webkit-align-items: center;
      .left-img {
        width: 80%;
        height: 80%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .img-word {
          display: -webkit-flex;
          color: #fffffd;
          position: absolute;
          top: 3%;
          right: 3%;
          .icon-headseterji {
            font-size: 0.14rem;
            line-height: 0.2rem;
            padding-right: 0.05rem;
          }
          .word {
            font-size: 0.14rem;
          }
        }
        .img-foot {
          color: #fffffd;
          position: absolute;
          bottom: 1%;
          right: 5%;
          display: -webkit-flex;
          .icon-i-info {
            font-size: 0.2rem;
          }
        }
      }
    }
    .photo-right {
      width: 53%;
      .right-top {
        width: 87%;
        height: 0.48rem;
        padding-top: 0.23rem;
        font-size: 0.16rem;
        color: #fffffd;
        line-height: 0.23rem;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .right-foot {
        width: 87%;
        height: 0.86rem;
        font-size: 0.14rem;
        color: #fffffd;
        display: -webkit-flex;
        -webkit-align-items: center;
        .foot-img {
          width: 0.27rem;
          height: 0.27rem;
          border-radius: 50%;
          margin-right: 0.1rem;
        }
        .icon-gengduo {
          font-size: 0.2rem;
        }
      }
    }
  }
}
</style>
