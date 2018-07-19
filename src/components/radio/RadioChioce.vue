<template>
<div class="box">
    <div class="header">
        <h3>今日优选</h3>
        <p><i class="iconfont icon-shuaxin"></i>换一换</p>
    </div>
    <ul>
      
        <li :key="index" v-for=" (p,index) in todayChoice">
          <router-link  :to="{path:'/radiolist',query:{id:p.program.radio.id}}">
          <div class="li-box">
            <div class="image"><img v-lazy="p.picUrl" alt=""></div>
            <div class="content">
                <h3>{{p.name}}</h3>
                <p class="name">{{p.program.radio.name}}</p>
                <p class="desc">{{p.program.radio.desc}}</p>
            </div>
          </div>
            
          </router-link>
        </li>
        
    </ul>
</div>
</template>
<script>
import { Indicator } from "mint-ui";

export default {
  data() {
    return {
      todayChoice: ""
    };
  },
  methods: {
    getTodayRadio() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });

      setTimeout(() => {
        Indicator.close();
      }, 4000);

      fetch("http://120.79.162.149:3000/personalized/djprogram").then(
        response => {
          if (response.ok) {
            response.json().then(data => {
              this.todayChoice = data.result;
              // console.log(data.result);
            });
          }
        }
      );
    }
  },
  created() {
    this.getTodayRadio();
  }
};
</script>
<style lang="scss" scoped>
.box {
  padding: 0 0.15rem;
  // background: #fff;
}
.header {
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.17rem;
  height: 0.28rem;
  h3 {
    font-size: 0.16rem;
    color: #333230;
  }
  p {
    font-size: 0.13rem;
    color: #646665;
  }
  i {
    padding-right: 0.07rem;
  }
}
ul {
  .li-box {
    padding-top: 0.06rem;
    // overflow: hidden;
    display: -webkit-flex;
    justify-content: space-between;
    .image {
      img {
        width: 1rem;
        height: 1rem;
        // width: 100%;
        // height: 100%;
      }
    }
    .content {
      flex: 1;
      margin-left: 0.1rem;
      border-bottom: 1px solid #e1e2e4;
      overflow: hidden;
      // white-space: nowrap;
      // text-overflow: ellipsis;
      h3 {
        font-size: 0.14rem;
        color: #333;
        line-height: 0.35rem;
        padding-top: 0.11rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p {
        font-size: 0.1rem;
        color: #7d7e80;
        line-height: 0.18rem;
      }
      .desc {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
