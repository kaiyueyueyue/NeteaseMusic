<template>
    <div class="navBox">
      <div class="navLi">
        <a class="nav-top"><i class="iconfont icon-weibiaoti-"></i></a>
        <a class="nav-word">{{oList.commentCount}}</a>
      </div>
      <div class="navLi">
        <a class="nav-top"><i class="iconfont icon-fenxiang"></i></a>
        <a class="nav-word">{{oList.shareCount}}</a>
      </div>
      <div class="navLi">
        <a class="nav-top"><i class="iconfont icon-25xiazai"></i></a>
        <a class="nav-word">下载</a>
      </div>
      <div class="navLi">
        <a class="nav-top"><i class="iconfont icon-checkbox"></i></a>
        <a class="nav-word">多选</a>
      </div>
    </div>

</template>

<script>
  // 引入四个小图标列表的组件

    export default {
      props:["oList"]

    }
</script>

<style lang="scss" scoped>
  .navBox{
    width:100%;
    height:0.65rem;
    display:-webkit-flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
    .navLi {
      height: 0.39rem;
      text-align: center;
      i {
        font-size: 0.2rem;
        color: #fffffd;
        display:block;
      }
      .nav-word {
        font-size: 0.14rem;
        padding-top: 0.06rem;
        color: #eae7e0;
        display:block;
      }
    }
  }


</style>
