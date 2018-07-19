<template>
  <div class="function-list">
    <ul>
      <li><i class="iconfont icon-yinyue"></i><span>本地音乐 <b>(211)</b></span></li>
      <li><i class="iconfont icon-iconset0481"></i><span>最近播放 <b>(211)</b></span></li>
      <li><i class="iconfont icon-25xiazai"></i><span>下载管理 <b>(211)</b></span></li>
      <li><i class="iconfont icon-icon-"></i><span>我的电台 <b>(211)</b></span></li>
      <li><i class="iconfont icon-shoucang2"></i><span>我的收藏 <b>(211)</b></span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "functionList",
    data(){
      return {

      }
    },
    components:{}
  };

</script>

<style lang="scss" scoped>
  /*公共部分*/
  *{
    margin:0;
    padding:0;
  }
  html{
    font-size:24.15vw;
  }
  ul,ol{
    list-style: none;
  }
  a{
    text-decoration:none;
  }


  /*分类列表*/
  .function-list{

  }
  .function-list ul{

  }
  .function-list ul li{
    display:-webkit-flex;
    font-size:0.12rem;
    line-height:.5rem;
  }
  .function-list ul li i{
    width:0.5rem;
    line-height:0.5rem;
    font-size:.2rem;
    font-weight:600;
    color:#d53b3b;
    text-align:center;
    flex-shrink:0;
  }
  .function-list ul li span {
    border-bottom:1px solid #e2e3e5;
    width:100%;
  }
</style>
