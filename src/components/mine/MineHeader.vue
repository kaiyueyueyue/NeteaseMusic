<template>
<div>
    <div class="box" v-if="userInfor.profile" v-bind:style="{backgroundImage:'url(' + userInfor.profile.backgroundUrl +')' } ">
        <p class="head">
          <router-link :to="{path:'/tuijian'}">
            <i class="iconfont icon-xitongfanhui"></i>
          </router-link>
            <i class="iconfont icon-fenxiang"></i>
        </p>
        <!-- <img class="headPic" :src="" alt=""> -->
        <!-- v-bind:style="{backgroundImage: 'url(' + oList.creator.backgroundUrl + ')'}" -->
        <div class="bottom">
            <h3>{{userInfor.profile.nickname}}</h3>
            <p class="fans"><span>关注&nbsp;&nbsp;{{userInfor.profile.follows}}&nbsp;&nbsp;&nbsp;&nbsp;</span><span>粉丝&nbsp;&nbsp;{{userInfor.profile.followeds}}</span></p>
            <p class="tag"><span>Lv.{{userInfor.level}}</span></p>
        </div>
    </div>
    <ul>
        <router-link :to="{path:'/music'}"><li>音乐</li></router-link>
        <router-link :to="{path:'/movement'}"><li>动态</li></router-link>
        <li>关于我</li>
    </ul>
</div>
    
</template>
<script>
export default {
  props: ["userInfor"]
};
</script>
<style lang="scss" scoped>
.box {
  // background: url(../../assets/images/mine/bg.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0 0.2rem;
  height: 2.8rem;
  position: relative;
}
.head {
  line-height: 0.36rem;
  display: flex;
  justify-content: space-between;
  //   padding: 0 0.13rem;
  i {
    color: #fff;
    font-size: 0.22rem;
  }
}
.bottom {
  position: absolute;
  bottom: 0.18rem;
  h3 {
    font-size: 0.15rem;
    color: #fff;
  }
  .fans {
    line-height: 0.29rem;
    color: #dcd8d7;
    font-size: 0.1rem;
  }
  .tag {
    display: -webkit-flex;
    span {
      margin-right: 0.05rem;
      line-height: 0.17rem;
      padding: 0 0.1rem;
      border-radius: 0.08rem;
      font-size: 0.07rem;
      color: #fff;
      background: rgba(255, 255, 255, 0.4);
    }
  }
}
.headPic {
  position: absolute;
  top: 0.86rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}
ul {
  width: 100%;
  display: -webkit-flex;
  justify-content: space-around;
  align-items: center;
  height: 0.39rem;
  //   border-top-left-radius: 0.1rem;
  //   border-top-right-radius: 0.1rem;
  border-radius: 0.1rem;
  li {
    font-size: 0.1rem;
    color: #000;
  }
}
</style>
