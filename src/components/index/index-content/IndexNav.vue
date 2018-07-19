<template>
  <div class="index-nav">
    <a href="javascript:;">
      <img src="../../../assets/images/index/nav1.png">
      <span>私人FM</span>
    </a>
    <router-link :to="{path:'/daily'}">
    <a href="javascript:;">
      <img src="../../../assets/images/index/nav2.png">
      <span>每日推荐</span>
    </a>
    </router-link>
    <a href="javascript:;">
      <img src="../../../assets/images/index/nav3.png">
      <span>歌单</span>
    </a>
    <router-link :to="{path:'singer'}">
      <a href="javascript:;">
        <img src="../../../assets/images/index/nav4.png">
        <span>排行榜</span>
      </a>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../../../assets/css/index.css);
.index-nav {
  display: flex;
  justify-content: space-around;
  margin-top: 0.54rem;
}
.index-nav a {
  display: flex;
  flex-direction: column;
}
.index-nav img {
  width: 0.48rem;
  height: 0.48rem;
  border-radius: 50%;
}
.index-nav a span {
  font-size: 0.12rem;
  margin-top: 0.1rem;
  color: #303030;
  text-align: center;
}
</style>