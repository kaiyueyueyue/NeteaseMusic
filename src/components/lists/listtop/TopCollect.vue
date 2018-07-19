<template>
  <div class="music-top">
    <div class="music-topBj">
      <p class="topBj-left">
        <i class="iconfont icon-bofang"></i><span class="playAll">播放全部</span><span class="musicNum">(共{{oList.trackCount}}首)</span>
      </p>
      <p class="topBj-right">
        <i class="iconfont icon-tainjia"></i><span class="collect-word"><b>收藏</b>({{oList.subscribedCount}})</span>
      </p>
    </div>
  </div>

</template>

<script>
    export default {
      props:["oList"]
    }
</script>

<style lang="scss" scoped>
  .music-top{
    width:100%;
    border-bottom:2px solid #eff0f2;
    .music-topBj{
      width:100%;
      height:0.44rem;
      background: #fbfcfe;
      border-top-left-radius:0.1rem ;
      border-top-right-radius:0.1rem ;
      display:-webkit-flex;
      -webkit-justify-content: space-between;
      .topBj-left{
        width:62%;
        display: -webkit-flex;
        -webkit-align-items: center;
        .icon-bofang{
          font-size: 0.2rem;
          color:#4c4c4c;
          padding:0 0.16rem;
        }
        .playAll{
          font-size: 0.16rem;
          color:#323335;
          font-weight:600;
        }
        .musicNum{
          font-size: 0.16rem;
          color:#979797;
        }
      }
      .topBj-right{
        width:38%;
        font-size: 0.16rem;
        display:-webkit-flex;
        -webkit-align-items: center;
        background: #fc5648;
        color:#fffffd;
        border-top-right-radius: 0.1rem;
        .icon-tainjia{
          padding-left:0.1rem;
          padding-right:0.08rem;
        }
      }
    }

  }

</style>
