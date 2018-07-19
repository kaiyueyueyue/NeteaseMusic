<template>
    <div>
        <ul>
            <router-link :to="{path:'/tuijian'}" active-class="active"><li>推荐</li></router-link>
            <router-link :to="{path:'/paihangbang'}" active-class="active"><li>排行榜</li></router-link>
            <router-link :to="{path:'/radio'}" active-class="active"><li>电台</li></router-link>
        </ul>
        
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
div {
  background: #e24439;
  .banner {
    width: 96%;
    margin: 0.1rem auto;
    border-radius: 0.05rem;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
ul {
  display: -webkit-flex;
  justify-content: space-around;
  align-items: center;
  li {
    // font-weight: 700;
    line-height: 0.33rem;
    font-size: 0.14rem;
    color: #ffd0d6;
    padding: 0 0.1rem;
  }
}
.active li {
  color: #fff;
  border-bottom: 2px solid #fff;
}
</style>
