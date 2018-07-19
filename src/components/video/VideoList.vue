<template>
<div class="bBox">
  <!--循环视频数据-->
  <div class="vList" :key="index" v-for="(v,index) in vList">
    <!--播放视频部分的部分-->
    <div class="vList-top">
      <div class="vTop">
        <video controls   loop class="mpBox" >
          <source :src="v.vio" type="video/mp4"/>
        </video>
        <p class="rTo">{{v.title}}</p>
        <!--<p class="playBtn"><i class="iconfont icon-bofang2"></i></p>-->
        <!-- <div class="pFo">
          <a class="aFo"><i class="iconfont icon-icon-3"></i><span class="playTime">{{v.playCount}}</span></a>
          <a class="aFo"><i class="iconfont icon-PCbofangye_paihangbang"></i><span class="playTime">{{v.time}}</span></a>
        </div> -->
      </div>
    </div>
    <!--视频下面的文字部分-->
    <div class="vList-center">
      <p class="cWord">{{v.word}}</p>
    </div>

    <!--视频下面点赞部分-->
    <div class="vList-foot">
      <div class="foot-left">
        <a   class="fImg"><img :src="v.pic"></a>
        <p class="fWord">{{v.name}}</p>
      </div>
      <div class="foot-right">
        <a class="zBox"><i class="iconfont icon-dianzan"></i><span class="zanNum">{{v.zannum}}</span></a>
        <a class="zBox"><i class="iconfont icon-weibiaoti-"></i><span class="zanNum">{{v.comnum}}</span></a>
        <a class="zBox"><i class="iconfont icon-gengduoxiao"></i></a>
      </div>
    </div>
    <div class="colorBox"></div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      vList: [
        {
          title: "推荐",
          vio: "./static/1.mp4",
          word: "Baby  what  you  want",
          name: "廖效浓",
          zannum: "910",
          comnum: "709",
          pic: "./static/1.jpg"
        },
        {
          title: "精选",
          vio: "./static/2.mp4",
          word: "超级面对面 第167期 毛不易：不为谁改变初衷",
          name: "毛不易",
          zannum: "6246",
          comnum: "1743",
          pic: "./static/2.jpg"
        },
        {
          title: "推荐",
          vio: "./static/3.mp4",
          word: "天地",
          name: "吴亦凡",
          zannum: "5864",
          comnum: "2019",
          pic: "./static/3.jpg"
        },
        {
          title: "精选",
          vio: "./static/4.mp4",
          word: "明智之举",
          name: "许嵩",
          zannum: "16084",
          comnum: "6512",
          pic: "../../../static/4.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.bBox {
  width: 100%;
  .vList {
    width: 100%;
    .vList-top {
      width: 100%;
      display: -webkit-flex;
      -webkit-justify-content: center;
      .vTop {
        width: 96%;
        height: 1.95rem;
        border-radius: 0.1rem;
        margin-top: 0.09rem;
        position: relative;
        background: rgba(0, 0, 0, 0.2);
        .mpBox {
          width: 100%;
          height: 1.95rem;
        }
        .rTo {
          width: 0.55rem;
          height: 0.22rem;
          border-radius: 0.15rem;
          font-size: 0.12rem;
          color: #fffffd;
          background: rgba(0, 0, 0, 0.3);
          display: -webkit-flex;
          -webkit-justify-content: center;
          -webkit-align-items: center;
          position: absolute;
          right: 0.04rem;
          top: 0.08rem;
          border: 1px solid #fffddd;
        }
        .playBtn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          .icon-bofang2 {
            color: #ccbab0;
            font-size: 0.57rem;
          }
        }
        .pFo {
          width: 96%;
          height: 0.31rem;
          display: -webkit-flex;
          -webkit-align-items: center;
          -webkit-justify-content: space-between;
          position: absolute;
          left: 0;
          bottom: 0;
          .aFo {
            display: -webkit-flex;
            .icon-icon-3 {
              color: #fffffd;
              font-size: 0.14rem;
              padding: 0 0.08rem;
            }
            .icon-PCbofangye_paihangbang {
              color: #fffffd;
              font-size: 0.14rem;
              padding: 0 0.08rem;
            }
            .playTime {
              color: #fffffd;
              font-size: 0.14rem;
            }
          }
        }
      }
    }
    .vList-center {
      width: 100%;
      height: 0.69rem;
      display: -webkit-flex;
      -webkit-justify-content: center;
      .cWord {
        width: 96%;
        border-bottom: 1px solid #e2e3e5;
        white-space: wrap;
        font-size: 0.14rem;
        line-height: 0.21rem;
        padding-top: 0.16rem;
        text-indent: 0.1rem;
        /*word-wrap:break-word;*/
        /*word-break:normal;*/
      }
    }
    .vList-foot {
      width: 100%;
      height: 0.49rem;
      display: -webkit-flex;
      .foot-left {
        width: 50%;
        display: -webkit-flex;
        -webkit-align-items: center;
        .fImg {
          display: -webkit-flex;
          width: 0.31rem;
          height: 0.31rem;
          margin: 0 0.1rem;
          img {
            width: 0.31rem;
            height: 0.31rem;
            border-radius: 50%;
          }
        }
        .fWord {
          font-size: 0.12rem;
        }
      }
      .foot-right {
        width: 50%;
        display: -webkit-flex;
        -webkit-align-items: center;
        -webkit-justify-content: space-around;
        .zBox {
          display: -webkit-flex;
          .icon-dianzan {
            color: #646665;
            font-size: 0.14rem;
            padding-right: 0.03rem;
          }
          .icon-weibiaoti- {
            color: #646665;
            font-size: 0.14rem;
            padding-right: 0.03rem;
          }
          .iconfont icon-gengduoxiao {
            color: #646665;
            font-size: 0.14rem;
          }
          .zanNum {
            color: #969696;
            font-size: 0.14rem;
          }
        }
      }
    }
    .colorBox {
      width: 100%;
      height: 0.05rem;
      background: #eff0f2;
    }
  }
}
</style>
