<template>
<div>
    <div class="head-box">   
        <img v-if="singerInfor.artist" :src="singerInfor.artist.img1v1Url" alt="">
        <div class="head">
                
              <p @click="goBack" v-if="singerInfor.artist">
                  <i class="iconfont icon-xitongfanhui"></i>
                {{singerInfor.artist.name}} &nbsp;{{singerInfor.artist.alias[0] != undefined ? singerInfor.artist.alias[0] : ''}}
              </p>
                <!-- </router-link> -->
            <p><i class="iconfont icon-fenxiang"></i></p>
        </div>
        <div class="foot">
            <a href="javascript:;"><i class="iconfont icon-xingxing"></i>收藏</a>
        </div>
    </div>
    <div class="content">
        <dl>
            <dt>
                <router-link :to="{name:'singerSong'}">热门演唱</router-link>
                <router-link :to="{name:'singerSong'}">专辑101</router-link>
                <router-link :to="{name:'singerSong'}">视频195</router-link>
                <router-link :to="{name:'singerSong'}">艺人信息</router-link>
            </dt>
                <router-view :singerInfor="singerInfor"></router-view>
        </dl>
    </div>
</div>
</template>
<script>
import { Indicator } from "mint-ui";

export default {
  data() {
    return {
      singerInfor: "",
      commentId: "",
      title: "",
      subNum: "",
      coverUrl: ""
      //   comment: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    getRadioDetail() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });

      setTimeout(() => {
        Indicator.close();
      }, 5000);
      //   console.log(this.$route.query.id);
      fetch(
        `http://120.79.162.149:3000/artists?id=${this.$route.query.id}&limit=40`
      ).then(response => {
        if (response.ok) {
          response.json().then(data => {
            // console.log(data);
            this.singerInfor = data;
            //   this.commentId = this.radioDetail[0].id;
            //   this.title = this.radioDetail[0].radio.name;
            //   this.subNum = this.radioDetail[0].radio.subCount;
            //   this.coverUrl = this.radioDetail[0].coverUrl;
          });
        }
      });
    }
  },
  created() {
    this.getRadioDetail();
  }
};
</script>
<style lang="scss" scoped>
.head-box {
  width: 100%;
  height: 2.81rem;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
}

.head {
  width: 100%;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  height: 0.47rem;
  padding: 0 0.17rem;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  font: outline;
  font-size: 0.16rem;
  color: #fff;
  .back {
    color: #fff;
  }
  p:last-child {
    i {
      margin-right: 0;
    }
  }
  i {
    font-size: 0.18rem;
  }
  .icon-xitongfanhui {
    margin-right: 0.2rem;
  }
  .icon-fenxiang {
    margin-right: 0.27rem;
  }
  .icon-gengduoxiao {
    font-size: 0.22rem;
    vertical-align: middle;
  }
}
.foot {
  width: 100%;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.17rem 0.1rem;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  div {
    color: #fff;
    h3 {
      font-size: 0.16rem;
    }
    p {
      font-size: 0.09rem;
    }
  }
  a {
    font-size: 0.1rem;
    color: #fff;
    border-radius: 0.14rem;
    padding: 0 0.31rem;
    line-height: 0.3rem;
    background: #e5443c;
    margin: 0 auto;
  }
}

dl dt {
  // background: #fff;
  display: -webkit-flex;
  justify-content: space-around;
  align-items: center;
  height: 0.38rem;
  border-top-left-radius: 0.07rem;
  border-top-right-radius: 0.07rem;
  font-size: 0.15rem;
  a {
    color: #656565;
  }
}
dd {
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  // height:0.6rem;
  overflow: hidden;
  .left,
  .right {
    width: 14%;
    font-size: 0.12rem;
    color: #989898;
    text-align: center;
  }
  .center {
    // flex: 1;
    width: 62%;
    border-bottom: 1px solid #dce0e3;
    p:first-child {
      width: 100%;
      font-size: 0.14rem;
      color: #353535;
      padding-top: 0.13rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p:last-child {
      font-size: 0.12rem;
      color: #989898;
      line-height: 0.31rem;
      span {
        margin: 0 0.08rem;
        i {
          margin-right: 0.04rem;
        }
      }
    }
  }
}
</style>
